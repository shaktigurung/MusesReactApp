import axios from "axios";

const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_DOMAIN
})

export default LocalApi;