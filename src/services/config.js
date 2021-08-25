import axios from 'axios'

// const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`));

export const http = axios.create({
    // headers: { "X-XSRF-TOKEN": CSRF_TOKEN },
    baseURL: 'http://localhost:8081/barbearia/'
})

