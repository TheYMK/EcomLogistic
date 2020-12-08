import React, { useState } from 'react';
import ResponsiveAntMenu from './ResponsiveAntMenu';
import { Menu, Switch, InputNumber } from 'antd';

function Header2() {
	const LIGHT = 'light';
	const DARK = 'dark';
	const VERTICAL = 'vertical';
	const HORIZONTAL = 'horizontal';
	const BOTTOM = 'bottom';
	const RIGHT = 'right';

	const [ desktopTheme, setDesktopTheme ] = useState(LIGHT);
	const [ mobileTheme, setMobileTheme ] = useState(DARK);
	const [ closeOnClick, setCloseOnClick ] = useState(true);
	const [ mobileBreakpoint, setMobileBreakpoint ] = useState(575);
	const [ viewMode, setViewMode ] = useState(HORIZONTAL);
	const [ menuPosition, setMenuPosition ] = useState(RIGHT);

	return (
		<React.Fragment>
			<ResponsiveAntMenu
				mobileMenuContent={(isMenuShown) => (isMenuShown ? <button>Close</button> : <button>Open</button>)}
				mobileBreakPoint={mobileBreakpoint}
				// throttleViewportChange={250}
				theme={(isMobile) => (isMobile ? mobileTheme : desktopTheme)}
				placement={menuPosition} // placement={'right'}
				mode={viewMode} // mode={isMobile => isMobile ? 'vertical' : 'horizontal'}
				closeOnClick={closeOnClick}
				menuClassName={'menu-wrapper'}
			>
				{(onLinkClick) => (
					<Menu>
						<Menu.Item key="/" className={'menu-home'}>
							<a onClick={onLinkClick} href={'/#'}>
								Home
							</a>
						</Menu.Item>
						<Menu.Item key="/#foo">
							<a onClick={onLinkClick} href={'/#foo'}>
								Foo
							</a>
						</Menu.Item>
						<Menu.Item key="/#bar">
							<a onClick={onLinkClick} href={'/#bar'}>
								Bar
							</a>
						</Menu.Item>
					</Menu>
				)}
			</ResponsiveAntMenu>
		</React.Fragment>
	);
}

export default Header2;
