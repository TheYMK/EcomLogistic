import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from 'next/link';

function LeftMenu() {
	return (
		<Menu mode="horizontal">
			<Menu.Item key="home">
				<Link href="/">
					<a>Acceuil</a>
				</Link>
			</Menu.Item>
			<SubMenu title={<span>Services</span>}>
				<Menu.Item key="setting:1">
					<Link href="/services">
						<a>Services aérien</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="setting:2">
					<Link href="/services">
						<a>Services maritime</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="setting:3">
					<Link href="/services">
						<a>Services terrestre</a>
					</Link>
				</Menu.Item>
			</SubMenu>

			<Menu.Item key="about">
				<Link href="/about">
					<a>À propos</a>
				</Link>
			</Menu.Item>

			<Menu.Item key="contact">
				<Link href="/contact">
					<a>Contactez nous</a>
				</Link>
			</Menu.Item>
		</Menu>
	);
}

export default LeftMenu;
