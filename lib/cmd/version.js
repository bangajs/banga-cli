const chalk = require("chalk")
const package = require("../../package.json")

module.exports = () => {
     console.log(`${chalk.yellowBright("\nBangaJS")} v${package.version}\n`)
}