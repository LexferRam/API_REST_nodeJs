const { Router } = require('express');
const router = Router();
const { getUsers } = require('../Controllers/users')

router.get('/', getUsers);

module.exports = router;

