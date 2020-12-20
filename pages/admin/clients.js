import React, { useEffect, useState } from 'react';
import Admin from '../../components/auth/Admin';
import AppLayout from '../../components/AppLayout';
import '../../styles/AdminDashboard.module.css';
import { createCustomer, getAllCustomers, removeCustomer } from '../../actions/admin';
import { Layout, Menu, Breadcrumb, Modal, Button } from 'antd';
import { UsergroupAddOutlined, EyeOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import CreateCustomerForm from '../../components/forms/CreateCustomerForm';
import Head from 'next/head';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminClientsPage() {
	const { user } = useSelector((state) => ({ ...state }));
	const [ values, setValues ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		number_pieces: 0,
		customer_address: '',
		transport_type: '',
		freight_ID: '',
		tracking_number: null,
		country: '',
		city: '',
		phone_number: '',
		status: '',
		estimated_arrival: null
	});

	const [ customers, setCustomers ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ transport_types, setTransportTypes ] = useState([ 'fret aérien', 'fret maritime', 'fret terrestre' ]);
	const [ statusOptions, setStatusOption ] = useState([
		'Not Processed',
		'Processing',
		'Dispatched',
		'Cancelled',
		'Completed'
	]);
	const [ collapsed, setCollapsed ] = useState(false);
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	useEffect(
		() => {
			if (user && user.token) loadCustomers();
		},
		[ user, loading ]
	);

	const loadCustomers = async () => {
		return await getAllCustomers(user.token).then((customer) => setCustomers(customer.data));
	};

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const head = () => (
		<Head>
			<title>Page Client | E-Com Logistics </title>
			<meta name="description" content="Page réservé aux administrateur de E-Com logistics" />
		</Head>
	);

	const handleOk = () => {
		// Create a customer
		setLoading(true);
		createCustomer(values, user.token)
			.then((res) => {
				console.log(`Created Customer => ${res}`);
				setLoading(false);
				setIsModalVisible(false);
				toast.success('Un nouveau client a été ajouté!');
				setValues({
					...values,
					first_name: '',
					last_name: '',
					email: '',
					number_pieces: 0,
					customer_address: '',
					transport_type: '',
					freight_ID: '',
					tracking_number: '',
					country: '',
					city: '',
					phone_number: '',
					status: '',
					estimated_arrival: ''
				});
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error(err.response.data.error);
			});
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleRemove = (id) => {
		let answer = window.confirm('Êtes-vous sur de vouloir supprimer ce client?');
		setLoading(true);

		if (answer) {
			removeCustomer(id, user.token)
				.then((res) => {
					setLoading(false);
					toast.success(`un client a été supprimé`);
					loadCustomers();
					// window.location.reload();
				})
				.catch((err) => {
					console.log(err);
					setValues({ ...values, loading: false });
					if (err.response.status === 400) {
						toast.error(err.response.data.error);
					}
				});
		}
	};

	const showCustomers = () => {
		return (
			<div className="table-responsive">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nom et prénom</th>
							<th scope="col">Email</th>
							<th scope="col">Tel</th>
							<th scope="col">Nombre de colis</th>
							<th scope="col">Type de fret</th>
							<th scope="col">ID du fret</th>
							<th scope="col">Numéro de suivi</th>
							<th scope="col">Pays</th>
							<th scope="col">Ville</th>
							<th scope="col">Adresse de destination</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>
									{customer.first_name} {customer.last_name}
								</td>
								<td>{customer.email}</td>
								<td>{customer.phone_number}</td>
								<td>{customer.number_pieces}</td>
								<td>{customer.transport_type}</td>
								<td>{customer.freight_ID}</td>
								<td>{customer.tracking_number}</td>
								<td>{customer.country}</td>
								<td>{customer.city}</td>
								<td>{customer.customer_address}</td>
								<td>
									<span className="btn btn-sm" onClick={(e) => handleRemove(customer._id)}>
										<DeleteOutlined className="text-danger" />
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	};

	return (
		<React.Fragment>
			{head()}
			<AppLayout>
				<Admin>
					<Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={[ '2' ]} mode="inline">
								<Menu.Item key="1" icon={<EyeOutlined />}>
									<Link href="/admin/dashboard">
										<a>Suivi</a>
									</Link>
								</Menu.Item>
								<Menu.Item key="2" icon={<UsergroupAddOutlined />}>
									<Link href="/admin/clients">
										<a>Ajouter Client</a>
									</Link>
								</Menu.Item>
								<SubMenu key="sub2" icon={<SettingOutlined />} title="Paramètre">
									<Menu.Item key="6">
										<Link href="/admin/password">
											<a>Mot de passe</a>
										</Link>
									</Menu.Item>
									<Menu.Item key="8">
										<Link href="">
											<a>Supprimer compte</a>
										</Link>
									</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Layout className="site-layout">
							<Content style={{ margin: '0 16px' }}>
								<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
									<h2>Clients</h2>
									<div className="row">
										<Button type="primary" onClick={showModal}>
											Ajouter un client
										</Button>
										<Modal
											title="Nouveau client"
											visible={isModalVisible}
											onOk={handleOk}
											onCancel={handleCancel}
										>
											<CreateCustomerForm
												// handleSubmit={handleSubmit}
												setValues={setValues}
												values={values}
												loading={loading}
												transport_types={transport_types}
												statusOptions={statusOptions}
											/>
										</Modal>
									</div>
									<div className="mt-5">{showCustomers()}</div>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>E-Comores Services SARL ©2020</Footer>
						</Layout>
					</Layout>
				</Admin>
			</AppLayout>
		</React.Fragment>
	);
}

export default AdminClientsPage;
