import axios from 'axios';
import { API_URL } from '../config';

export const getCustomerInfo = async (tracking_number) => {
	return await axios.get(`${API_URL}/client/${tracking_number}`);
};
