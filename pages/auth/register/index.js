import React from 'react';
import AppLayout from '../../../components/AppLayout';
import RegisterComponent from '../../../components/auth/RegisterComponent';

function RegisterPage() {
	return (
		<React.Fragment>
			<AppLayout>
				<RegisterComponent />
			</AppLayout>
		</React.Fragment>
	);
}

export default RegisterPage;
