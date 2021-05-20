// const pgp = require('pg-promise');
// const pgp 	  = require('pg-promise')({})
module.exports = app => {

    // const estudante = app.data.pessoa;
    // const estudante = require('../data/pessoa.json');
    const controller = {};

    controller.createUsuario = function(req, res){
        

        const nome = req.body.nome;
        console.log(nome);
        app.db.none(`INSERT INTO public.usuario (nome) VALUES ('${nome}')`);
        res.status(200).json('done');
    }

    controller.deleteUsuario = function(req, res){
        if (req.query.id){
            app.db.any(`DELETE from public.usuario WHERE id_usuario = ${req.query.id}`).then(data => {
                res.status(200).json("User removido!");
            }).catch(function(err){
                return next(err);
            });
        }else{
            return res.status(500).json("Não existe um ID")
        }
    }

    controller.getUsuario = function(req, res, next){
        if(req.query.id){
            app.db.any(`SELECT * from public.usuario WHERE id_usuario = ${req.query.id}`).then(data =>{
                res.status(200).json(data);
            }).catch(function(err){
                return next(err);
            })
        }else{
            app.db.any(`SELECT * from public.usuario`).then(data => {
                res.status(200).json(data);
            }).catch(function(err){
                return next(err);
            })
        }
    }

    return controller;
}
