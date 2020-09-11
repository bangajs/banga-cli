const mode = require("../handlers/_mode")
const TxtFormatter = require("./utils/text-formatter")
const cli = {}

cli.parse = (cli_args) => {

     const command = cli_args[2].toLowerCase()
     const type = cli_args[3].toLowerCase()
     const name = new new TxtFormatter(cli_args[4].toLowerCase())

     return {
          command,
          type,
          name,
          option: {}
     }
}

module.exports = cli