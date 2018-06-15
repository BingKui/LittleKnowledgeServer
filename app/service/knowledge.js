'use strict';

const Service = require('egg').Service;

class KnowledgeService extends Service {
  async getAll() {
    const category = this.ctx.model.Category;
    const res = await category.find({});
    return res;
  }
  async getOneById(id) {
    const category = this.ctx.model.Category;
    const item = await category.findById(id);
    return item;
  }
}

module.exports = KnowledgeService;
