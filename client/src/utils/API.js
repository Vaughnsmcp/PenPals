import axios from "axios";
//HEEELP!!
export default {
  getPoets() {
    return axios.get(`/api/poets`);
  },
  createSignUp(signUpData) {
    return axios.post(`/api/signups`, signUpData);
  },
  createPoetPortfolio(poetData){
    return axios.post(`/api/poets`, poetData);
  }


};
