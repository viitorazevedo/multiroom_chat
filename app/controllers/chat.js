module.exports.iniciaChat = function(application, _req, res){
    
    var dadosForm = _req.body;

    _req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    _req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = _req.validationErrors();

    if (erros){
        res.render('index', {validacao : erros});
        return;
    } 

    res.render('chat');
}