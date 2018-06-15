'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CategorySchema = new Schema({
    name: { // 知识点名字
      type: String,
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    code: {
      type: Number,
      min: 0,
      max: 15,
    },
    bgColor: {
      type: String,
      default: '#666666',
    },
  });
  return mongoose.model('Category', CategorySchema);
};
