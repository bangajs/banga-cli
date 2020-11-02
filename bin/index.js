#!/usr/bin/env node

const chalk = require('chalk');
const help = require("./../lib/cmd/help")

try {
     require("./../lib/utils/app").parse()
     if (process.ARGS) require("./../lib")()
} catch (error) {
     console.log(chalk.red(error.message))
     help()
}