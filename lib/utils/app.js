const yargs = require("yargs-parser")
const app = {}
const { cmdAlias } = require("./../config")
const help =  require("./../cmd/help")
const package = require("./../../package.json")

// options for commands
const options = {
     new: {
          auth: true,
          dep: true,
          force: false,
          git: true,
          session: false,
     },
     generate: {
          auth: false,
          controller: true,
          create: true,
          crud: true,
          default: true,
          delete: true,
          force: false,
          model: true,
          read: true,
          root: false,
          route: true,
          service: true,
          update: true
     }
}

/**
 * Get's cli args and build up process.ARGS
 */
app.parse = () => {
     const args = yargs(process.argv.splice(2))
     const cmd = args._[0] && args._[0].toLowerCase()

     if (!cmd) return help()
     if (!cmdAlias[cmd]) throw new Error(`banga: "${cmd}" is not a recognised command or alias`)

     args.$cmd = cmdAlias[cmd]
     args.$version = package.version

     process.ARGS = { ...options[args.$cmd], ...args }
}

/**
 * Validate and parse file/path names
 * 
 * @param {string} str 
 */
app.parseName = (str) => {
     const strArray = str.split("/")

     // Remove "/" at the beginning of the string if there is any
     if (str.charAt(0) == "/") {
          strArray.shift()
     }

     // Check if name is valid 
     var patt = new RegExp(/^[\w\/-]{1,}$/);
     if (!patt.test(str)) return false

     const name = strArray.splice((strArray.length - 1), 1).join()
     if (!name) return false

     const path = strArray.join("/")

     return {
          name,
          path
     }
}


/**
 * Checks if a code or template is renderable with regards to the given options
 * 
 * @param {string[]} options 
 */
app.canRender = (options = []) => {
     for (const opt of options)
          if (!process.ARGS[opt]) return false

     return true
}

module.exports = app