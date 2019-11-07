
// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

    // Total list of friend entries
    app.get('/api/friends', function (req,res) {
        res.json(friends);
    });

    // Add new friend entry
    app.post('/api/friends', function (req, res) {
        var totalDifference = 0;
        var Match = {
            name: '',
            photo: '',
            difference: 100000
        };
        // Capture the user input object
        var userInput = req.body;
        var userResponse = userInput.name;
        var userMatch = userInput.scores;

        var b = userMatch.map(function (item) {
            return parseInt(item, 10);
        });
        var userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userResponse);
        console.log("User Score " + userMatch);

        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Sum" + sum);
        console.log("Your new friend " + Match.friendDifference);
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend diff " + Match.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log(totalDifference);

            if (totalDifference <= Match.friendDifference) {
                Match.name = friends[i].name;
                Match.photo = friends[i].photo;
                Match.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(Match);

        friends.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(Match);
    });
};