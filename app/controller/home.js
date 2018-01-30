const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = '<a href="/news">hello world</a>';
    }
}

module.exports = HomeController;