const SMSHandler = require('../SMSHandl');

var yoyo8 = function () { };

yoyo8.prototype = new SMSHandler();
yoyo8.prototype.SendMessage = function (request) {

    console.log('發給 yoyo8 成功');
    if (request == 3) {
        return;
    }
    this.next.SendMessage(request);
}

module.exports = yoyo8;



