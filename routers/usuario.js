const express = require('express')
const router = express.Router();
var bcrypt = require('bcryptjs');
var md5 = require('md5');
// const authetication = require('../middleware/authentication');

const Usuario = require('../models/usuario');
const Empresa = require('../models/empresa');

router.get('/',((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de usuário'
    })
}))

router.get('/listar', ((req, res, next) => {
    Usuario.findAll()
    .then((usuario) => {
        res.status(200).send({
            response: usuario
        })
    }).catch((erro) => {
        res.status(500).send({
            error: erro,
            response: null
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

    var tela = req.body.tela_config == true ? 'S' : 'N';
    var ativo = req.body.ativo == true ? 'S' : 'N';
    var user = req.body.tela_usuarios == true ? 'S' : 'N';
    var transacoes = req.body.tela_transacoes == true ? 'S' : 'N';
    var saque = req.body.tela_saque == true ? 'S' : 'N';
    var senha = md5(req.body.senha)
    
    Empresa.findOne({
        attributes: 
            [ 
                'em_cod',
                'em_token'
            ],
        where:{
            em_token: req.body.empresa
        },
    }).then((emp)=>{
        Usuario.create({
            us_empresa: emp.em_cod,
            us_email: req.body.email,
            us_senha: senha,
            us_nome: req.body.nome,
            us_depto: req.body.depto,
            us_nivel: req.body.nivel,
            us_ativo: ativo,
            us_tela_inicio: req.body.tela_inicio,
            us_tela_config: tela,
            us_tela_usuarios: user,
            us_tela_transacoes: transacoes,
            us_tela_saque: saque,
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
    }).catch((err)=>{
        res.status(500).send({
            error: err,
            response: null
        })
    })
    
    
}))

module.exports = router