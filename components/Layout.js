import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/nav/Header';
import Header2 from '../components/nav/Header2';
import { auth } from '../actions/firebase';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../actions/auth';

function Layout({ children }) {
	const dispatch = useDispatch();

	// to check firebase auth state
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const idTokenResult = await user.getIdTokenResult();

				getCurrentUser(idTokenResult.token)
					.then((response) => {
						dispatch({
							type: 'LOGGED_IN_USER',
							payload: {
								name: response.data.name,
								email: response.data.email,
								token: idTokenResult.token,
								role: response.data.role,
								_id: response.data._id
							}
						});
					})
					.catch((err) => console.log(err));
			}
		});

		// cleanup
		return () => unsubscribe();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<ToastContainer />
			{children}
		</React.Fragment>
	);
}

export default Layout;
