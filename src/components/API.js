import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/markets/1';

export function getData(){
	return axios.get(API_URL);
}
