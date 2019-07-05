
var SMSHandler = function () {
    this.next = {
        SendMessage: function (request) {
            console.log('All strategies exhausted.');
        }
    }
};
SMSHandler.prototype.setNext = function (next) {
    this.next = next;
    return next;
}
SMSHandler.prototype.SendMessage = function (request) { };

module.exports = SMSHandler;


