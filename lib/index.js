const modes = require("./handlers/_mode")
const TxtFormatter = require("./utils/text-formatter")

module.exports = (args) => {
     console.log(args)
     modes[args.command][args.type](new TxtFormatter(args.name), args.option)
}

