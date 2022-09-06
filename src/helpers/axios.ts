import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://178.216.248.36:8001/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HTTP;
