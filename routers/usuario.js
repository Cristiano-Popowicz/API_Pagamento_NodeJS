const express = require('express')
const router = express.Router();
var bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario')

router.get('/',((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de usuario'
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

module.exports = router