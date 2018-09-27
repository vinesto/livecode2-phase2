var express = require('express');
var router = express.Router();
var { createStatus, getAllStatus, getMyStatus, deleteStatus } = require('../controllers/status')
var authentication = require('../middlewares/authentication')
/* GET users listing. */
router.get('/', getAllStatus)
router.get('/user', authentication, getMyStatus)

router.post('/', authentication, createStatus)
router.delete('/:id', authentication, deleteStatus)

module.exports = router;
