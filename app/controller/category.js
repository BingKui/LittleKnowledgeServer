'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getAllCategory() {
    this.ctx.body = {
      data: [],
    };
    this.ctx.status = 200;
  }
  async addOne() {
    console.log(this.ctx);
    // this.ctx.service.category.addOne();
  }
}

module.exports = CategoryController;
