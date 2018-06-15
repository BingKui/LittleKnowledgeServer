'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529047885819_8210';

  // add your config here
  config.middleware = [ 'gzip', 'errorHandler' ];

  config.gzip = {
    threshold: 1024, // 小于 1k 的相应体不压缩
  };

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/knowledge',
    options: {},
  };


  return config;
};
