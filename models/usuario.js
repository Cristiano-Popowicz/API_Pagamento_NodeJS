const db = require('./db.js')
const Empresa = require('../models/empresa')

const Usuarios = db.sequelize.define('usuarios',{
    us_id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    us_empresa:{
        type: db.Sequelize.INTEGER,
    },
    us_email: {
        type: db.Sequelize.STRING(150),
        allowNull: false,
        unique: {
            name: 'us_email',
            msg: 'Infelizmente esse email já foi cadastrado...',
        },
    },
    us_senha: {
        type: db.Sequelize.UUID,
        allowNull: false
    },
    us_nome: {
        type: db.Sequelize.STRING(150),
        allowNull: false
    },
    us_depto: {
        type: db.Sequelize.STRING(150)
    },
    us_nivel: {
        type: db.Sequelize.INTEGER
    },
    us_ativo: {
        type: db.Sequelize.CHAR(1)
    },
    us_tela_inicio: {
        type: db.Sequelize.DATE
    },
    us_tela_config: {   
        type: db.Sequelize.CHAR(1)
    },
    us_tela_usuarios: {
        type: db.Sequelize.CHAR(1)
    },
    us_tela_transacoes: {
        type: db.Sequelize.CHAR(1)
    },
    us_tela_saque: {
        type: db.Sequelize.CHAR(1)
    },
   
},{
    timestamps: false
});

module.exports = Usuarios