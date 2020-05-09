import axios from "axios";

export default {
  getPoets() {
    return axios.get(`/api/poets`);
  },
  createSignUp(signUpData) {
    return axios.post(`/api/signups`, signUpData);
  },
  createPoetPortfolio(poetData) {
    return axios.post(`/api/poets`, poetData);
  },
  getPoetById(id) {
    return axios.get(`/api/poets/${id}`);
  },
  deletePoet(id) {
    return axios.delete(`/api/poets/${id}`);
  },
  updatePoetPortfolio(id, updatedPortfolio) {
    return axios.put(`/api/poets/${id}`, updatedPortfolio);
  },
};
