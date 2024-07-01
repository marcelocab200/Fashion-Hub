import axios from 'axios'

// import dotenv from 'dotenv'

// dotenv.config({path: "../../../.env"})


const Api = axios.create({
    // baseURL: `http://${process.env.DB_HOST}:${process.env.PORT}/API`
    baseURL: `http://localhost:3005/API`
})

export default Api