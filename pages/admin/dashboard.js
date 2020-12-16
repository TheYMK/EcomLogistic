import React, { useEffect, useState } from 'react';
import Admin from '../../components/auth/Admin';
import AppLayout from '../../components/AppLayout';
import '../../styles/AdminDashboard.module.css';
import { getAllCustomers, updateDeliveryStatus } from '../../actions/admin';
import { Layout, Menu } from 'antd';
import { UsergroupAddOutlined, EyeOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AdminTrackingInfo from '../../components/cards/AdminTrackingInfo';
import { toast } from 'react-toastify';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminDashboardPage() {
	const [ collapsed, setCollapsed ] = useState(false);

	const [ values, setValues ] = useState({
		customers: [],
		loading: false
	});

	const { customers, loading } = values;

	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			if (user && user.token) loadCustomers();
		},
		[ user ]
	);

	const loadCustomers = async () => {
		return await getAllCustomers(user.token).then((res) => {
			setValues({ ...values, customers: res.data });
		});
	};

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	const handleUpdateStatus = (id, status) => {
		updateDeliveryStatus(id, status, user.token).then((res) => {
			toast.success('Delivery Status Changed');
			loadCustomers();
		});
	};

	return (
		<React.Fragment>
			<AppLayout>
				<Admin>
					<Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
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
								<div className="site-layout-background" style={{ minHeight: 360 }}>
									<h2>Aperçu</h2>
									<div className="mt-5">
										<AdminTrackingInfo
											customers={customers}
											handleUpdateStatus={handleUpdateStatus}
										/>
									</div>
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

export default AdminDashboardPage;
