const modes = require("./handlers/_mode")
const Name = require("./utils/Name")

module.exports = (args) => {
     // console.log(args)
     modes[args.mode][args.type](new Name(args.name), args.option)
}

