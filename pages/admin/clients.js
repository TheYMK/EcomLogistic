import React, { useState } from 'react';
import Admin from '../../components/auth/Admin';
import AppLayout from '../../components/AppLayout';
import '../../styles/AdminDashboard.module.css';
import { Layout, Menu, Breadcrumb, Modal, Button } from 'antd';
import { UsergroupAddOutlined, EyeOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminClientsPage() {
	const [ collapsed, setCollapsed ] = useState(false);
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<React.Fragment>
			<AppLayout>
				<Admin>
					<Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={[ '2' ]} mode="inline">
								<Menu.Item key="1" icon={<EyeOutlined />}>
									<Link href="/admin/dashboard">
										<a>Aperçu</a>
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
											<p>Some contents...</p>
											<p>Some contents...</p>
											<p>Some contents...</p>
										</Modal>
									</div>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
						</Layout>
					</Layout>
				</Admin>
			</AppLayout>
		</React.Fragment>
	);
}

export default AdminClientsPage;
