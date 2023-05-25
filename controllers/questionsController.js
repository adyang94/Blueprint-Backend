var questions = require('../AdditionalData/sampleQuestions.json');


exports.fetchQuestions = function (req, res) {
    res.json(questions);
};

