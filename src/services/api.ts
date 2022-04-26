import axios from 'axios'
const api = axios.create({
   // baseURL: 'https://my-app-jk42m.ondigitalocean.app',
  baseURL: process.env.API_URL || 'https://my-app-jk42m.ondigitalocean.app',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 40000,
    validateStatus: (status: any) => {
        return true;
    },
})

export { api }