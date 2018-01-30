module.exports = app =>{
  return{
    schedule:{
      interval: '10s',  // 1分钟间隔
      type: 'all',
      disable: app.config.env === 'local',   // 开发环境不执行
    },
    async task(ctx){
      console.log("=====================定时任务执行！！！==============================");
      const res = await ctx.curl('https://cnodejs.org/api/v1/topics', {
        data: {
          page: 1,
          tab: "ask",
          limit: 5,
          mdrender: false
        },
        dataType: 'json',
      })
      console.log(res.data);
      ctx.app.cache = res.data;
      console.log("=====================定时任务结束！！！==============================");
    }
  }
}