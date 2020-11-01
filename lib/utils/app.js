const yargs = require("yargs-parser")
const app = {}

app.parse = () => {
     const args = yargs(process.argv.splice(2))
     args.$cmd = args._[0] && args._[0].toLowerCase()

     process.ARGS = args
}

app.parseName = (str) => {
     const strArray = str.split("/")

     // Remove / at the beginning of the string if there is any
     if (str.charAt(0) == "/") {
          strArray.shift()
     }

     var patt = new RegExp(/^[\w\/-]{2,}$/);
     if (!patt.test(str)) return false

     const name = strArray.splice((strArray.length - 1), 1).join()
     if (!name) return false

     const path = strArray.join("/")

     return {
          name,
          path
     }
}

module.exports = app