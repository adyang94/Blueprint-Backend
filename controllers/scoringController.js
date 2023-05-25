var domainMap = require('../AdditionalData/domainMap.json');
var resultCriteria = require('../AdditionalData/level2Criteria.json');

let map = {};

// Scoring functions and calculations

exports.calculateTotalScore = function (req, res) {
    let domainScores = {};

    // loop through domainMap and reorganize for faster reference
    for (let i = 0; i < domainMap.length; i++) {
        let currQuestion = domainMap[i].question_id;
        let currDomain = domainMap[i].domain;
        
        if (!currQuestion) continue;
        if (!map[currQuestion]) map[currQuestion] = currDomain;
        if (!domainScores[currDomain]) domainScores[currDomain] = 0;
    }

    console.log('map: ', map, 'domainScores: ', domainScores);


    // loop through answers and use domainMap to calculate total score of each domain
    let answers = req.body.answers;
    

    for (let j = 0; j < answers.length; j++){
        let currQuestionId = answers[j].question_id;
        let currValue = answers[j].value;
        let currDomain = map[currQuestionId];

        domainScores[currDomain] += currValue;

    }

    console.log('domainscores: ', domainScores);


    // Using the total score of each domain, determine which level 2 assessments

    console.log('resultcriteria: ', resultCriteria);

    let results = new Set();

    console.log('DOMAIN SCORES: ', Object.entries(domainScores));

    Object.entries(domainScores).map((entry) => {
        let [domain, score] = entry;
        console.log('1---', resultCriteria[domain]);

        if (resultCriteria[domain]) {
            let operator = resultCriteria[domain].operator;
            console.log('1---', operator);

            switch (operator) {
                case "=":
                    if(resultCriteria[domain].score_threshold === score) {
                        results.add(resultCriteria[domain].level_2_assessment);
                    }
                    break;
                case ">":
                    if(score > resultCriteria[domain].score_threshold) {
                        results.add(resultCriteria[domain].level_2_assessment);
                    }
                    break;
                case "<":
                    if(score < resultCriteria[domain].score_threshold) {
                        results.add(resultCriteria[domain].level_2_assessment);
                    }
                    break;
                case ">=":
                    console.log('2---');
                    if(score >= resultCriteria[domain].score_threshold) {
                        results.add(resultCriteria[domain].level_2_assessment);
                    }
                    break;
                case "<=":
                    if(score <= resultCriteria[domain].score_threshold) {
                        results.add(resultCriteria[domain].level_2_assessment);
                    }
                    break;
            }
        }
    });

    // return results

    console.log(results);

    let response = Array.from(results)

    res.json({results: response});
};

