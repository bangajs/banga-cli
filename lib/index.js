const modes = require("./handlers/_mode")

module.exports = (args) => {
     modes[args.mode][args.type](new TextFormat(args.name), args.options)
}

