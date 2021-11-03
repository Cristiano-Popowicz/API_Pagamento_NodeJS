'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      us_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      us_empresa:{
          type: Sequelize.INTEGER,
      },
      us_email: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: {
              name: 'us_email',
              msg: 'Infelizmente esse email já foi cadastrado...',
          },
      },
      us_senha: {
          type: Sequelize.STRING(250),
          allowNull: false
      },
      us_nome: {
          type: Sequelize.STRING(150),
          allowNull: false
      },
      us_depto: {
          type: Sequelize.STRING(150)
      },
      us_nivel: {
          type: Sequelize.INTEGER
      },
      us_ativo: {
          type: Sequelize.CHAR(1)
      },
      us_tela_inicio: {
          type: Sequelize.CHAR(1)
      },
      us_tela_config: {   
          type: Sequelize.CHAR(1)
      },
      us_tela_usuarios: {
          type: Sequelize.CHAR(1)
      },
      us_tela_transacoes: {
          type: Sequelize.CHAR(1)
      },
      us_tela_saque: {
          type: Sequelize.CHAR(1)
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
