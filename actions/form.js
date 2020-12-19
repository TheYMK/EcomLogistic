import fetch from 'isomorphic-fetch';
import { API_URL } from '../config';

export const emailContactForm = (data) => {
	return fetch(`${API_URL}/contact`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
			// Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(data)
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(`====> ${err}`));
};
