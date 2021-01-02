import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

const obj = {
    getEmployees: function () {
        return axios.get(BASEURL);
    },
};

export default obj;

