'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const KnowledgeSchema = new Schema({
    name: { // 知识点名字
      type: String,
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
    },
    category: {
      type: Array,
    },
    detail: {
      type: String,
    },
  });
  return mongoose.model('Knowledge', KnowledgeSchema);
};
