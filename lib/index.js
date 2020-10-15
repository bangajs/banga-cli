const commands = require("./../lib/cmd")

module.exports = (args) => {
     const cmd = args.$command

     if (args.v || args.version) {
          commands["version"]()
     }
     else if (args.h || args.help) {
          commands["help"](args)
     }
     else {
          if (!commands[cmd]) {
               console.log(`"${cmd}" is not a recognised command or alias`)
               commands["help"](args)
          }
          else {
               commands[cmd](args)
          }
     }

     // console.log(args.)
}