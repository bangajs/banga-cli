#!/usr/bin/env node

const help = require("./../lib/cmd/help")

try {
     require("./../lib/utils/app").parse()
     if (process.ARGS) require("./../lib")()
} catch (error) {
     console.log(error.message)
     help()
}