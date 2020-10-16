#!/usr/bin/env node

require("./../lib/utils/cli").parse()
const help = require("../lib/cmd/help")
const banga = require("./../lib")
const $ = require("./../lib/config/defaults")

try {
     banga()
} catch (error) {
     console.log(error.message)
     help()
}