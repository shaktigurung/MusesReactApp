import axios from "axios";

const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN
})

export default LocalApi;