'use strict';

var md5 = require('md5');

module.exports = {
  up: async (queryInterface, Sequelize) =>  queryInterface.bulkInsert('usuarios',
  [
    {
      us_empresa: 1,
      us_email: "crispopowicz@gmail.com",
      us_senha: md5("123"),
      us_nome: "Cristiano Popowicz",
      us_depto: "",
      us_nivel: 0,
      us_ativo: "S",
      us_tela_inicio: "S",
      us_tela_config: "S",
      us_tela_usuarios: "S",
      us_tela_transacoes: "S",
      us_tela_saque: "S",
    },
    {
      us_empresa: 1,
      us_email: "diogo@gmail.com",
      us_senha: md5("123"),
      us_nome: "Diogo Cesar",
      us_depto: "",
      us_nivel: 0,
      us_ativo: "S",
      us_tela_inicio: "S",
      us_tela_config: "S",
      us_tela_usuarios: "S",
      us_tela_transacoes: "S",
      us_tela_saque: "S",
    }
  ],
  {}),

  down: async (queryInterface, Sequelize) => {
   
  }
};
