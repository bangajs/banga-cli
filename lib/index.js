const commands = require("./../lib/cmd")

module.exports = () => {
     commands[process.ARGS.$cmd]()
}