const TxtFormatter = require("./text-formatter")
const yargs = require("yargs-parser")
const cli = {}

const commands = {
     g: "generate",
     generate: "generate"
}

const types = {
     a: "asset",
     asset: "asset",
     c: "controller",
     controller: "controller",
     m: "model",
     model: "model",
     r: "route",
     project: "project",
     p: "project",
     route: "route",
     s: "service",
     service: "service"
}

cli.parse = (arvg) => {

     const args = yargs(arvg.splice(2))

     args.$command = args._[0] && args._[0].toLowerCase()



     // //Validate type
     // let in_type = cli_args[3].toLowerCase()
     // let type
     // if (types[in_type]) {
     //      type = types[in_type]
     // }
     // else {
     //      throw new Error(`"${in_type}" is not a recognised type or alias`)
     // }


     // //Validate name
     // let name = TxtFormatter(cli_args[4] || "hi")
     // if (!name != 0) {
     //      throw new Error(`"${in_command}" is not a recognised command or alias`)
     // }

     return args
}

module.exports = cli