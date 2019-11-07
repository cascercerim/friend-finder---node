
// Pull in dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	// Home page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

	// Survey page
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

};