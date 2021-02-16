import axios from "axios";

const URL = "https://api.github.com";

const api = axios.create({
  baseURL: URL,
});

const config = {
  headers: {
  },
};


export const ContactWithMe = async (Person) => {
    console.log(Person);

}