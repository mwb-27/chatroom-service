const Controller = require('egg').Controller;

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = 'Hello world';
    }
  }
  return HomeController; 
}
