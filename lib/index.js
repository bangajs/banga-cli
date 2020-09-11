const commands = require("./handlers/_commands")

module.exports = (args) => {
     console.log(args)
     commands[args.command][args.type](args)
}

