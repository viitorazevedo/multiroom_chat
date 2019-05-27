module.exports = function(application) {
	application.post('/chat', function(_req, res){
			application.app.controllers.chat.iniciaChat(application, _req, res);
	});

    application.get('/chat', function(_req, res){
		application.app.controllers.chat.iniciaChat(application, _req, res);
});
}