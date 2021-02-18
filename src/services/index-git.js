import axios from "axios";

const URL = "https://api.github.com";
const user = "ThauanLK";

const api = axios.create({
  baseURL: URL,
});

const config = {
  headers: {
  },
};

export const  getRepo = async (_callback) => {
  try{
    const response = await api.get(`/users/${user}/repos`,config);
    return new Promise(()=>_callback(response));
  } catch (err) {
    console.log(err);
  } 
}
