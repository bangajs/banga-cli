const commands = require("./../lib/cmd")


module.exports = () => {
     const ARGS = process.ARGS
     let cmd = ARGS.$cmd

     commands[cmd]()
}