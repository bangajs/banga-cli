#!/usr/bin/env node
"use strict"

const chalk = require("chalk");
const help = require("./../lib/cmd/help")

process.title = "bangajs-cli";
process.on("unhandledRejection", (err) => console.log( chalk.red(err.message)));

try {
  require("../lib/bootstrap").parse()
  if (process.ARGS) require("./../lib")()
} catch (error) {
  console.log(chalk.red(error.message))
  help()
}