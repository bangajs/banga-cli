const commands = require("./../lib/cmd")
const help = require("./cmd/help")

const alias = {
     docs: "docs",
     g: "generate",
     generate: "generate",
     h: "help",
     help: "help",
     new: "new",
     v: "version",
     version: "version",
}


module.exports = () => {
     const ARGS = process.ARGS
     let cmd = ARGS.$cmd

     if (!cmd) return help()
     if (!alias[cmd]) throw new Error(`banga: "${cmd}" is not a recognised command or alias`)

     cmd = alias[cmd]

     commands[cmd]()
}