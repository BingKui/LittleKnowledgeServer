'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const category = controller.category;
  const knowledge = controller.knowledge;
  // 类别
  router.get('/api/category', category.getAllCategory);
  router.post('/api/category', category.addOne);
  // 内容
  router.get('/api/knowledge', knowledge.getAllKnowledge);
};
