const express = require('express')
const router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario')
const Empresa = require('../models/empresa')

router.post("/", ((req, res, next) => {
    var senha = md5(req.body.senha) //Criptografar a senha
    
    //buscar usuario
    Usuario.findOne({
        attributes: ['us_id', 
                    'us_empresa', 
                    'us_email',
                    'us_senha',
                    'us_nome'
                ],
        where:{
            us_email: req.body.email,
            us_senha: senha
        },
    }).then((user) => {
        //Criar Token JWT
        const token = jwt.sign({
            id: user.us_id,
            senha: user.us_senha
        }, process.env.JWT_KEY, { expiresIn: '24h' })
        
        //Procurar empresa
        Empresa.findOne({
            attributes: ['em_token'],
            where:{
                em_cod: user.us_empresa
            }
        }).then((emp) => {

            var retorno = {
                "nome": user.us_nome,
                "email": user.us_email,
                "senha": user.us_senha,
                "empresa" : emp.em_token,
                "token": token,
            }

            res.status(200).send({
                response: retorno,
            })
        }).catch((erro) =>{
            res.status(500).send({
                error: erro,
                response: 'Erro ao efetuar login'
            })
        })
    }).catch((erro) =>{
        res.status(401).send({
            error: erro,
            response: 'Falha na autenticação'
        })
    })
}))

module.exports = router