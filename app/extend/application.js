const BAR = Symbol('Application#bar');

module.exports = {
  get bar(){
    if(!this[BAR]){
      this[BAR] = this.config.xx + this.config.yy;
    }
    return this[BAR];
  }
}