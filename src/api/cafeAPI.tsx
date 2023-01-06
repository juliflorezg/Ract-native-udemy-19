import axios from 'axios';

const baseURL = 'http://192.168.128.10:8080/api';

const cafeAPI = axios.create({baseURL});

export default cafeAPI;
