#!/usr/bin/env node

const args = require("./../lib/utils/args")
const banga = require("./../lib")
const defaults = require("./../lib/config/defaults")

global.log = console.log
global.$ = defaults
// const $.color = defaults.color

try {
     banga(args.parse(process.argv))
} catch (error) {

     const command = `${$.color.red}ERROR:${$.color.reset}`
     const message = `${$.color.bright}${error.message}${$.color.reset}`
     log(`${command}: ${message}`)
}