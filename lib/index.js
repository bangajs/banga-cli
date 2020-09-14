const commands = require("./handlers/_commands")

module.exports = (args) => {+
     commands[args.command][args.type](args)
}