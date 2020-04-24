var axios = require("axios")

const URL = "https://randomuser.me/api/?results=30&nat=us";

export default {
    search: function(query) {
        return axios.get(URL + query);
    }
};