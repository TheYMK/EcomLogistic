import React from 'react';
import AppLayout from '../../../components/AppLayout';
import LoginComponent from '../../../components/auth/LoginComponent';
function LoginPage() {
	return (
		<React.Fragment>
			<AppLayout>
				<LoginComponent />
			</AppLayout>
		</React.Fragment>
	);
}

export default LoginPage;
