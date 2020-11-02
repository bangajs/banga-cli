const commands = require("./../lib/cmd")
const help = require("./cmd/help")
const ARGS = process.ARGS

module.exports = () => {
     if (ARGS.h || ARGS.help) {
          return help()
     }

     commands[process.ARGS.$cmd]()
}