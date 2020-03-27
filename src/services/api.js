import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.100:3333' //estou utilizando o ip na máquina pois o locallhoust se refere ao celular onde estou testando o app e isso poderia dar conflito
});
export default api;
