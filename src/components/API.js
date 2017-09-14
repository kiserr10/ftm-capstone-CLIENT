import axios from 'axios';

const id = 1;
const API_URL1 = `http://localhost:3000/api/v1/markets/${id}`;
const APU_URL2 = `http://localhost:3000/api/v1/farmers`;
const AUTH_URL = `http://localhost:3000/auth/`;

export function getData(){
	return axios.get(API_URL1);
}

export function postSignup(user){
	return axios.post(`${AUTH_URL}/signup`, user);
}
export function postLogin(credentials){
	return axios.post(`${AUTH_URL}/login`, credentials)
		.then(res => {
			const {id, token} = res.data;
			localStorage.setItem('Token', token);
			localStorage.setItem('id', id);
			setAuthToken(token);
			console.log(token, id);
		});
}

function setAuthToken(token){
	if(token){
		axios.defaults.headers.common["Authorization"] = `BEARER ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}
