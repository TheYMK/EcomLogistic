import axios from 'axios';
import { API_URL } from '../config';

export const createCustomer = async (customer, authtoken) => {
	return await axios.post(`${API_URL}/admin/customers`, customer, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getAllCustomers = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/customers`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getSingleCustomer = async (customer_id, authtoken) => {
	return await axios.get(`${API_URL}/admin/customers/${customer_id}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const removeCustomer = async (customer_id, authtoken) => {
	return await axios.delete(`${API_URL}/admin/customers/${customer_id}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateDeliveryLocation = async (customer_id, location, authtoken) => {
	return await axios.put(
		`${API_URL}/admin/customers/${customer_id}/delivery-location`,
		{ location },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const updateDeliveryStatus = async (customer_id, status, authtoken) => {
	return await axios.put(
		`${API_URL}/admin/customers/${customer_id}/delivery-status`,
		{ status },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};
