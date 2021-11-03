'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empresas', {
      em_cod: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      em_cnpj:{
          type: Sequelize.STRING(18)
      },
      em_razao: {
          type: Sequelize.STRING(70)
      },
      em_fanta: {
          type: Sequelize.STRING(40)
      },
      em_fone: {
          type: Sequelize.STRING(14)
      },
      em_whats: {
          type: Sequelize.STRING(14)
      },
      em_cep: {
          type: Sequelize.STRING(9)
      },
      em_end: {
          type: Sequelize.STRING(40)
      },
      em_end_num: {
          type: Sequelize.STRING(20)
      },
      em_bairro: {
          type: Sequelize.STRING(20)
      },
      em_cid: {
          type: Sequelize.STRING(30)
      },
      em_uf: {
          type: Sequelize.CHAR(2)
      },
      em_cadastro: {
          type: Sequelize.DATE
      },
      em_liberado_ate: {
          type: Sequelize.DATE
      },
      em_aceita_termos: {
          type: Sequelize.STRING(15)
      },
      em_token: {
        type: Sequelize.STRING(80)
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('empresas');
  }
};
