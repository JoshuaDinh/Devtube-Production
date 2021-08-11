import axios from "axios";
const instance = axios.create({
  baseURL: "/",
});

// axios.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
