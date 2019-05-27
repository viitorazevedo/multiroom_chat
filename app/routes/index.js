module.exports = function(application) {
	application.get('/', function(_req, res){
		application.app.controllers.index.home(application, _req, res);
	});
}