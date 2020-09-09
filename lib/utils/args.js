const mode = require("../handlers/_mode")

function  parse(cli_args) {
     
     const mode = cli_args[2]
     const type = cli_args[3]
     const name = cli_args[4]

     return {
          mode,
          type,
          name,
          option: {}
     }
}

module.exports.parse = parse