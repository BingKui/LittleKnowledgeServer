'use strict';

const Controller = require('egg').Controller;

class KnowledgeController extends Controller {
  async getAllKnowledge() {
    this.ctx.body = {
      data: [ 'neirong' ],
    };
  }
  async getOneKnowledge() {
    this.ctx.body = {
      data: {
        name: '123123',
      },
    };
  }
}

module.exports = KnowledgeController;
