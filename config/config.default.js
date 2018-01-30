module.exports = {
  keys:'12312',
  // views 配置
  view:{
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  },
  // 添加news配置项
  news:{
    pageSize: 5,
    serverUrl: 'https://cnodejs.org/api/v1',
  },
  // add middleware robot
  middleware:[
    'robot',
    // 'gzip'
  ],
  // robot's configurations
  robot:{
    ua: [
      /Baiduspider/i,
    ]
  },
  // gzip's configurations
  gzip:{
    threshold:1024,  // 少于1k的响应体不压缩
  },
  bodyParser:{
    jsonLimit:'10mb',
  },

  xx:1,
  yy:2
}