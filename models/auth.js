const db = require('./db.js')

const Auth = db.sequelize.define('auth',{
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    usuario:{
        type: db.Sequelize.INTEGER,
    },
    token: {
        type: db.Sequelize.STRING(50),
    },
    created:{
        type: db.Sequelize.DATE
    }
})