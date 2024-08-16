import axios from 'axios';

export const createAxiosInstance = () => {
	const instance = axios.create({ baseURL: 'https://ecommerce.routemisr.com/api/v1' });

	return instance;
};
