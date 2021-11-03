require('dotenv').config({ 
    path: process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
})

const express = require("express");
const bodyParse = require('body-parser')
const handlebars = require('express-handlebars')

const app = express()
const morgan = require('morgan')

//rotas
const rotaEmpresa = require('./routers/empresa')
const rotaUsuario = require('./routers/usuario')
const rotaAuth = require('./routers/auth')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parse
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 
                'Origin, X-Requerested, Content-Type, Accept, Authorization')
    
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }
    next();
});

app.use(morgan('dev'))


app.get('/app',((req, res, next) => {
    res.render('inicio', ({app: process.env.APP_NAME}))
}));

app.use('/empresa', rotaEmpresa)
app.use('/usuario', rotaUsuario)
app.use('/auth', rotaAuth)

app.use((req, res, next)=>{
    const erro = new Error('Rota não encontrada')
    erro.status(404)
    next(erro)
    res.render('inicio', ({app: process.env.APP_NAME}))
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.mensagem
        }
    })
})

module.exports = app