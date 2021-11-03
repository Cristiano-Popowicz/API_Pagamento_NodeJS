const db = require('./db.js')

const Empresa = db.sequelize.define('empresas',{
    em_cod: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    em_cnpj:{
        type:db.Sequelize.STRING(18)
    },
    em_razao: {
        type:db.Sequelize.STRING(70)
    },
    em_fanta: {
        type:db.Sequelize.STRING(40)
    },
    em_fone: {
        type:db.Sequelize.STRING(14)
    },
    em_whats: {
        type:db.Sequelize.STRING(14)
    },
    em_cep: {
        type:db.Sequelize.STRING(9)
    },
    em_end: {
        type:db.Sequelize.STRING(40)
    },
    em_end_num: {
        type:db.Sequelize.STRING(20)
    },
    em_bairro: {
        type:db.Sequelize.STRING(20)
    },
    em_cid: {
        type:db.Sequelize.STRING(30)
    },
    em_uf: {
        type:db.Sequelize.CHAR(2)
    },
    em_cadastro: {
        type:db.Sequelize.DATE
    },
    em_liberado_ate: {
        type:db.Sequelize.DATE
    },
    em_aceita_termos: {
        type:db.Sequelize.STRING(15)
    },
    em_token: {
        type:db.Sequelize.STRING(80)
    },
},{
    timestamps: false
})

module.exports = Empresa