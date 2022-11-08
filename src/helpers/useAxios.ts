import axios from "axios";

export const USER = axios.create({
  baseURL: "http://178.216.248.36:8001/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});

export const SERVER = axios.create({
  baseURL: "http://178.216.248.36:8000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});
