module.exports = app =>{
  app.beforeStart(async ()=>{
    let url = 'http://192.168.0.106:3000/region_dumps.json';
    app.cities = await app.curl(url,{
      method:'GET',
      dataType:'json'
    })
  })
}