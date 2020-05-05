import axios from "axios";
// help!
export default {
  getPoets() {
    return axios.get(`/api/poets`);
  }
};
