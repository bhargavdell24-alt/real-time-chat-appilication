import axios from "axios";

export const API = axios.create({
  baseURL: "https://real-time-chat-appilication-backend.onrender.com",
  withCredentials: true,
});