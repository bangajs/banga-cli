const yargs = require("yargs-parser")
const app = {}
const { command_alias, commands } = require("./config")
const help = require("./cmd/help")
const package = require("../package.json")


/**
 * Creates custom process.ARGS object with cli args
 */
app.parse = () => {
  const args = yargs(process.argv.splice(2))
  const cmd = args._[0] && args._[0].toLowerCase()

  if (!cmd) return help()
  if (!command_alias[cmd]) throw new Error(`banga: "${cmd}" is not a recognised command or alias`)

  args.$cmd = command_alias[cmd]
  args.$version = package.version

  process.ARGS = { ...commands[args.$cmd], ...args }
}

/**
 * Validate and parse file/path names
 * 
 * @param {string} str File path
 */
app.parseName = (str) => {
  const strArray = str.split("/")

  // Remove "/" at the beginning of the string if there is any
  if (str.charAt(0) == "/") strArray.shift()

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
 * Checks if a template is renderable with regards to the given options
 * 
 * @param {string[]} options Array of options
 */
app.canRender = (options = []) => {
  for (const opt of options)
    if (!process.ARGS[opt]) return false

  return true
}

module.exports = app