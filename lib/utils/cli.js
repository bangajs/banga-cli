const yargs = require("yargs-parser")
const cli = {}

cli.parse = () => {
     const args = yargs(process.argv.splice(2))
     args.$cmd = args._[0] && args._[0].toLowerCase()

     process.ARGS = args
}

module.exports = cli