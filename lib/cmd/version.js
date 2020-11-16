const chalk = require("chalk")
const package = require("../../package.json")

module.exports = () => {
     console.log(`${chalk.yellowBright("\nBàngáJS")} v${package.version}\n`)
}