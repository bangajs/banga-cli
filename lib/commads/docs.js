const opn = require('opn');
const config = require("./../config/defaults")

module.exports = () => {
     // opens the url in the default browser 
     opn(`${config.docs}`);
}