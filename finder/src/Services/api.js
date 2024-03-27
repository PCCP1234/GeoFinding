import axios from 'axios';

//2495-300?jason=1

const api = axios.create({
    baseURL: 'https://json.geoapi.pt/cp/',
    headers: {'Accept': 'application/json'}
});

export default api;