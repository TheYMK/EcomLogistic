import React, { useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined, UserOutlined, UserAddOutlined, LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Router from 'next/router';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';

const { SubMenu, Item } = Menu;

function Header() {
	const [ current, setCurrent ] = useState('home');

	const dispatch = useDispatch();

	const { user } = useSelector((state) => ({ ...state }));

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});

		Router.push('/auth/login');
	};

	return (
		<React.Fragment>
			<div className="text-center">
				<Link href="/">
					<a>
						<img src="/static/images/logo2.png" width="125px" />
					</a>
				</Link>
			</div>
			<Menu onClick={handleClick} selectedKeys={[ current ]} mode="horizontal">
				<Item key="home" icon={<AppstoreOutlined />}>
					<Link href="/">
						<a>Acceuil</a>
					</Link>
				</Item>
				<Item key="services">
					<Link href="/services">
						<a>Services</a>
					</Link>
				</Item>
				<Item key="about">
					<Link href="/about">
						<a>À propos de nous</a>
					</Link>
				</Item>
				<Item key="Contact">
					<Link href="/contact">
						<a>Contactez nous</a>
					</Link>
				</Item>
				{!user && (
					<Item key="register" icon={<UserAddOutlined />} className="float-right">
						<Link href="/auth/register">
							<a>Inscription</a>
						</Link>
					</Item>
				)}

				{!user && (
					<Item key="login" icon={<UserOutlined />} className="float-right">
						<Link href="/auth/login">
							<a>Se connecter</a>
						</Link>
					</Item>
				)}

				{user && (
					<SubMenu
						icon={<SettingOutlined />}
						title={user.email && user.email.split('@')[0]}
						className="float-right"
					>
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
		</React.Fragment>
	);
}

export default Header;
