import axios from "axios";


const BASE_URL = "https://swapi.dev/api";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

