const withCSS = require('@zeit/next-css');

// We can export env variables using publicRuntimeConfig
module.exports = withCSS({
	publicRuntimeConfig: {
		REGISTER_REDIRECT_URL: 'http://localhost:3000/auth/register/complete',
		FORGOT_PASSWORD_REDIRECT_URL: 'http://localhost:3000/auth/login',
		API_URL: 'http://localhost:8000/api'
	}
});

// To access these variables easily we create an other file called config so we don't have to write publicRuntimeConfig.[....]
