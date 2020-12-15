import React from 'react';
import { Menu, Icon } from 'antd';
import { SettingOutlined, UserOutlined, UserAddOutlined, LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';
import Router from 'next/router';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const { SubMenu, Item } = Menu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu() {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => ({ ...state }));

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});

		Router.push('/auth/login');
	};

	return (
		<Menu mode="horizontal">
			{!user && (
				<Item key="register" icon={<UserAddOutlined />}>
					<Link href="/auth/register">
						<a>Inscription</a>
					</Link>
				</Item>
			)}

			{!user && (
				<Item key="login" icon={<UserOutlined />}>
					<Link href="/auth/login">
						<a>Se connecter</a>
					</Link>
				</Item>
			)}

			{user && (
				<SubMenu icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]}>
					{user &&
					user.role === 'admin' && (
						<Item key="dashboard">
							<Link href="/admin/dashboard">
								<a>
									<Item key="dashboard">Dashboard</Item>
								</a>
							</Link>
						</Item>
					)}
					<Item icon={<LogoutOutlined />} onClick={logout}>
						Logout
					</Item>
				</SubMenu>
			)}
		</Menu>
	);
}

export default RightMenu;
