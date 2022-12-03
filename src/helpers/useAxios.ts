import axios from "axios";

export const USER = axios.create({
  baseURL: "http://172.86.123.65:8001/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});

export const SERVER = axios.create({
  baseURL: "http://172.86.123.65:8000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});
