const opn = require('opn');
const { docs } = require("../config")

module.exports = () => {
     // opens the url in the default browser 
     opn(`${docs}`);
}