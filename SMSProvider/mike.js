const SMSHandler = require('../SMSHandl');

var mike = function () { };
mike.prototype = new SMSHandler();
mike.prototype.SendMessage = function (request) {

    console.log('發給三竹成功');
    if (request == 2) {
        return;
    }

    this.next.SendMessage(request);
}

module.exports = mike;



