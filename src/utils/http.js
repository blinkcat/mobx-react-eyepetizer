import axios from 'axios';

const http = axios.create({
	baseURL: 'https://baobab.kaiyanapp.com/api/v1/'
});

export default http;
