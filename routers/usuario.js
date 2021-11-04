const express = require('express')
const router = express.Router();
var bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario')

router.get('/',((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de usuário'
    })
}))

router.get('/listar',((req, res, next) => {
    Usuario.findAll().then((usuario) => {
        res.status(200).send({
            response: usuario
        }).catch((erro) =>{
            res.status(500).send({
                error: erro,
                response: null
            })
        })
    })
}))

router.get("/adm-usuarios", function(req, res){
    Usuario.findAll().then(function(users){
        res.status(200).send({
            users
        })
    })
   //res.sendFile(__dirname + "/html/")
})

router.post("/gravar", ((req, res, next) => {
    if(!req.body.email){
        return res.status(500).send({
            mensagen: 'E-mail não preenchido corretamente'
        })
    }

    if(!req.body.senha){
        return res.status(500).send({
            mensagen: 'Senha não preenchida corretamente'
        })
    }

    if(!req.body.nome){
        return res.status(500).send({
            mensagen: 'Nome não preenchido corretamente'
        })
    }
    
    Usuario.create({
        us_empresa: req.body.empresa,
        us_email: req.body.email,
        us_senha: req.body.senha,
        us_nome: req.body.nome,
        us_depto: req.body.depto,
        us_nivel: req.body.nivel,
        us_ativo: req.body.ativo,
        us_tela_inicio: req.body.tela_inicio,
        us_tela_config: req.body.tela_config,
        us_tela_usuarios: req.body.tela_usuarios,
        us_tela_transacoes: req.body.tela_transacoes,
        us_tela_saque: req.body.tela_saque,
    }).then(function(){
        res.status(201).send({
            mensagen: 'SUCCESS'
        })
    }).catch(function(erro){
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

module.exports = router