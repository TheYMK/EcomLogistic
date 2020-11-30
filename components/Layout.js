import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/nav/Header';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<ToastContainer />
			{children}
		</React.Fragment>
	);
}

export default Layout;
