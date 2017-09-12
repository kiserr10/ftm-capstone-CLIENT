import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/markets';

export function getData(){
	return axios.get(API_URL);
}
