import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://themecrafted-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
