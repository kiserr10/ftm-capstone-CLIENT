import axios from 'axios';

const API_URL1 = `https://farm-to-market.herokuapp.com/api/v1/markets`;
const API_URL2 = `https://farm-to-market.herokuapp.com/api/v1/farmers`;
const API_URL3 = `https://farm-to-market.herokuapp.com/api/v1/accounts/`;
const AUTH_URL = `https://farm-to-market.herokuapp.com/auth/`;

export function getData(){
	return axios.get(API_URL1);
}
export function getAccountData(id){
	return axios.get(`${API_URL3}/${id}`);
}
export function getFarmerData(id){
	return axios.get(`${API_URL2}/${id}`);
}

export function postSignup(user){
	return axios.post(`${AUTH_URL}/signup`, user)
		.then(res => {
			const {id, token} = res.data;
			localStorage.setItem('Token', token);
			localStorage.setItem('id', id);
			setAuthToken(token);
			console.log(token, id);
		});
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

export function postCreateProfile(profile){
	return axios.post(`${API_URL2}`, profile)
		.then(res =>{
			console.log("hey");
		});
}

function setAuthToken(token){
	if(token){
		axios.defaults.headers.common["Authorization"] = `BEARER ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}

export function logoutUser(){
	localStorage.clear();
}
