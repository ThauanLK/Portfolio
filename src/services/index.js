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

export const  getRepo = async () => {
  try{
    const response = await api.get(`/users/${user}/repos`,config);
    console.log(response.data);
    return response.data;

  } catch (err) {
    console.log(err);
  } 
}

export const ContactWithMe = async () => {

}