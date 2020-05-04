import axios from "axios";
// help!
export default {
  getPoet() {
    return axios.get(`/api/poets`);
  },
  savePoet()
};
