const fetch = require('node-fetch');


module.exports = {
    getUsers: async (req, res) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        res.json(users);
    }
}