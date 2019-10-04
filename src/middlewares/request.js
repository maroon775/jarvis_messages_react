import axios from 'axios';

export const create = (params = {}) => {
	return axios.create(params);
};
