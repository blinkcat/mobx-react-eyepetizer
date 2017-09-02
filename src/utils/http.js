import axios from 'axios';

const http = axios.create({
	baseURL: 'http://baobab.kaiyanapp.com/api/v1/'
});

export default http;
