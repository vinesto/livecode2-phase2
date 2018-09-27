var express = require('express');
var router = express.Router();
var { login, register, getOneUser, getAllUser, getRandomUser } = require('../controllers/users')

/* GET users listing. */
router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.get('/random', getRandomUser)

router.post('/login', login)
router.post('/register', register)

module.exports = router;
