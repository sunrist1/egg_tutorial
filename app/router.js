module.exports = app => {
    const { router, controller } = app;
    const gzip = app.middlewares.gzip({threshold:1024});
    router.get('/', controller.home.index);
    router.get('/add', controller.home.add);
    router.get('/news',gzip, controller.news.list);
};