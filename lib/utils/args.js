const TxtFormatter = require("./../utils/text-formatter")
const cli = {}

const commands = {
     g: "create",
     generate: "create"
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

cli.parse = (cli_args) => {

     //Validate command
     let in_command = cli_args[2].toLowerCase()
     let command
     if (commands[in_command]) {
          command = commands[in_command]
     }
     else {
          throw new Error(`"${in_command}" is not a recognised command or alias`)
     }


     //Validate type
     let in_type = cli_args[3].toLowerCase()
     let type
     if (types[in_type]) {
          type = types[in_type]
     }
     else {
          throw new Error(`"${in_type}" is not a recognised type or alias`)
     }


     //Validate name
     let name = new TxtFormatter(cli_args[4].toLowerCase())
     if (!name) {
          throw new Error(`"${in_command}" is not a recognised command or alias`)
     }

     return {
          command,
          type,
          name,
          option: {}
     }
}

module.exports = cli