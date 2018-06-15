'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
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
  async addOne(item) {
    const category = this.ctx.model.Category;
    const result = await category.create(item).exec();
    if (result) {
      return {
        msg: '添加类别成功',
      };
    }
    return {
      msg: '添加类别失败',
      info: result,
    };
  }
}

module.exports = CategoryService;
