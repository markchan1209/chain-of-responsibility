const NoSend = require('./SMSProvider/NoSend');
const Mike = require('./SMSProvider/mike');
const Yoyo8 = require('./SMSProvider/yoyo8');


const SMSManager = {
    SendMessage: () => {
        var nosend = new NoSend();
        var mike = new Mike();
        var yoyo8 = new Yoyo8();

        nosend.setNext(mike).setNext(yoyo8);
        nosend.SendMessage(1);
    }
}
module.exports = SMSManager;