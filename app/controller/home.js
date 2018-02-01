const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        console.log(this.ctx.app.cities);
        this.ctx.body = '<a href="/news">hello world</a>';
    }
    async add(){
        const ctx = this.ctx;
        let count = ctx.cookies.get('count');
        count = count ? Number(count) : 0;
        ctx.cookies.set('count',++count);
        ctx.body = count;
    }
}

module.exports = HomeController;