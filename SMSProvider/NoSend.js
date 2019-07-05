const SMSHandler = require('../SMSHandl');

var testsend = function () { };
testsend.prototype = new SMSHandler();
testsend.prototype.SendMessage = function (request) {

    console.log('發給測試環境成功');

    if (request == 1) {
        return;
    }
    this.next.SendMessage(request);
}

module.exports = testsend



