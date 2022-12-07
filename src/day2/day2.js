const matchup = require('./day2.json');
const opposMatchup = require('./day2opp.json');
function day2(input) {
    var matches = input.replaceAll('\r', '').split('\n');
    var score = 0;
    var determined = 0;
    for (var match of matches) {
        var opponent = match.split(' ')[0];
        var proponent = match.split(' ')[1];
        var choices = matchup[proponent];
        var inverse = opposMatchup[opponent];
        //part1
        if (choices.beats == opponent) {
            score += choices.points + 6;
        } else if (choices.loses == opponent) {
            score += choices.points;
        } else {
            score += choices.points + 3;
        }
        //part 2
        if (choices.outcome == "win") {
            determined += matchup[inverse.loses].points + 6;
        } else if (choices.outcome == "lose") {
            determined += matchup[inverse.beats].points;
        } else {
            determined += matchup[inverse.draws].points + 3;
        }

    }
    return {
        "partOne": score,
        "partTwo": determined
    }
}

module.exports = {
    day2,
    // Note: you can add helper functions for testing within .test.js here if you wish
};
