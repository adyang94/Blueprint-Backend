var express = require('express');
var router = express.Router();

var questionsController = require('../controllers/questionsController');
var scoreController = require('../controllers/scoringController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST req for submitting answers */
router.post('/score-assessments', scoreController.calculateTotalScore);

/* POST req for submitting answers */
router.get('/fetch-questions', questionsController.fetchQuestions);

module.exports = router;
