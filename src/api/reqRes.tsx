import axios from 'axios';

const reqResApi = axios.create({
  baseURL: 'https://reqres.in/api'
});

export default reqResApi;
