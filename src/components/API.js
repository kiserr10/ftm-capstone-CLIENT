import axios from 'axios';

const id = 1;
const API_URL1 = `http://localhost:3000/api/v1/markets/${id}`;
// const APU_URL2 = `http://localhost:3000/api/v1/farmers`;

export function getData(){
	return axios.get(API_URL1);
}
