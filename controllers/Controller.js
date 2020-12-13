const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const Repository = require('../repositories/Repository');

router.use(function timeLog(req, res, next) {
    next();
});

router.post('/fetch_all_students',urlencodedParser, async (request,response) => {
    let result = await Repository.fetchAllStudents();
    response.send(result);
});

module.exports = router;
