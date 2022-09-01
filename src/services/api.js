import axios from 'axios'

// BASE URL: https://free.currencyconverterapi.com/api/v5/
// REQUISIÇÕES: convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad


const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5/'
})

export default api