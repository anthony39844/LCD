import axios from "axios";

const API_URL = "https://alfa-leetcode-api.onrender.com/"; // Change this when using ngrok or deploying

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
