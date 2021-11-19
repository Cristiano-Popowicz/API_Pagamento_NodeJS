const express = require('express')
const router = express.Router();
var md5 = require('md5');
const authetication = require('../middleware/authentication');

const Empresa = require('../models/empresa')

router.get('/',((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de empresa'
    })
}))

router.get('/listar', authetication, ((req, res, next) => {
    Empresa.findAll()
    .then((empresa) => {
        res.status(201).send({
            response: empresa
        })
    }).catch((erro) => {
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))    

router.get('/buscarByToken', authetication, ((req, res, next) => {
    Empresa.findOne({
        where: {
            em_token: req.body.token
        }
    }).then((empresa) => {
        res.status(201).send({
            response: empresa
        })
    }).catch((erro) =>{
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

router.post("/gravar", ((req, res, next) => {
    
    var token = md5(req.body.cpfcnpj)
    if(!req.body.cpfcnpj){
        return res.status(500).send({
            mensagen: 'CPF ou CNPJ não preenchido corretamente'
        })
    }

    if(!req.body.nome){
        return res.status(500).send({
            mensagen: 'Nome não preenchido corretamente'
        })
    }

    if(!req.body.whats){
        return res.status(500).send({
            mensagen: 'Numero do Whatsapp não preenchido corretamente'
        })
    }

    if(!req.body.cep){
        return res.status(500).send({
            mensagen: 'CEP não preenchido corretamente'
        })
    }

    if(!req.body.endereco){
        return res.status(500).send({
            mensagen: 'Endereço não preenchido corretamente'
        })
    }

    if(!req.body.numero){
        return res.status(500).send({
            mensagen: 'Numero não preenchido corretamente'
        })
    }

    if(!req.body.bairro){
        return res.status(500).send({
            mensagen: 'Bairro não preenchido corretamente'
        })
    }

    if(!req.body.cidade){
        return res.status(500).send({
            mensagen: 'Cidade não preenchido corretamente'
        })
    }

    if(!req.body.uf){
        return res.status(500).send({
            mensagen: 'Estado não preenchido corretamente'
        })
    }

    if(!req.body.aceita_termos){
        return res.status(500).send({
            mensagen: 'Aceita termos de Utilização não foi ativado'
        })
    }
    
    Empresa.create({
        em_cnpj: req.body.cpfcnpj,
        em_razao: req.body.nome,
        em_fanta: req.body.fantasia,
        em_fone: req.body.fone,
        em_whats: req.body.whats,
        em_cep: req.body.cep,
        em_end: req.body.endereco,
        em_end_num: req.body.numero,
        em_bairro: req.body.bairro,
        em_cid: req.body.cidade,
        em_uf: req.body.uf,
        em_cadastro: new Date,
        em_liberado_ate: new Date,
        em_aceita_termos: req.body.aceita_termos,
        em_token: token,
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