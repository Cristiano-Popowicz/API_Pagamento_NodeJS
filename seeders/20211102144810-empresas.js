'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('empresas',
    [
      {
        em_cnpj: '39.911.496/0001-90',
        em_razao: 'ZM Pay',
        em_fanta: 'ZM Pay',
        em_fone: '0000-0000',
        em_whats: '0000-0000',
        em_cep: '0000-000',
        em_end: 'Av. Curitiba',
        em_end_num: '667',
        em_bairro: 'Centro',
        em_cid: 'Apucarana',
        em_uf: 'PR',
        em_cadastro: new Date,
        em_liberado_ate: new Date,
        em_aceita_termos: new Date,
        em_token: 'd41d8cd98f00b204e9800998ecf8427e',
      },
      {
        em_cnpj: '39.911.496/0001-90',
        em_razao: 'ZM Teste',
        em_fanta: 'ZM TEste',
        em_fone: '0000-0000',
        em_whats: '0000-0000',
        em_cep: '0000-000',
        em_end: 'Av. Curitiba',
        em_end_num: '667',
        em_bairro: 'Centro',
        em_cid: 'Apucarana',
        em_uf: 'PR',
        em_cadastro: new Date,
        em_liberado_ate: new Date,
        em_aceita_termos: new Date,
        em_token: 'd41d8cd98f00b204e9800998ecf8427e',
      },
    ],
  {}),

  down: async (queryInterface, Sequelize) => {
   
  }
};
