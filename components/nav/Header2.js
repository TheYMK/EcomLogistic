import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import Link from 'next/link';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import '../../styles/Header.module.css';

function Header2() {
	const [ current, setCurrent ] = useState('home');
	const [ visible, setVisible ] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<React.Fragment>
			<nav className="menuBar">
				<div className="logo">
					<Link href="/">
						<a>
							<img src="/static/images/logo2.png" />
						</a>
					</Link>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<RightMenu />
					</div>
					<Button className="barsMenu" type="text" onClick={showDrawer}>
						<span className="barsBtn" />
					</Button>
					<Drawer
						title="Menu"
						placement="right"
						width={320}
						closable={false}
						onClose={onClose}
						visible={visible}
					>
						<LeftMenu />
						<RightMenu />
					</Drawer>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default Header2;
