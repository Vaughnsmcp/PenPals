import axios from "axios";
//HEEELP!!
export default {
  getPoets() {
    return axios.get(`/api/poets`);
  },
  createSignUp(signUpData) {
    return axios.post(`/api/signups`, signUpData);
  },
  createPoetPortfolio(poetData) {
    console.log(poetData);
    return axios.post(`/api/poets`, poetData);
  },
  getLogIn(id) {
    return axios.get(`/api/poets/${id}`);
  },
};
