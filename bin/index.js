#!/usr/bin/env node

const help = require("./../lib/cmd/help")

try {
     require("./../lib/utils/app").parse()
     const banga = require("./../lib")

     if (process.ARGS) banga()
} catch (error) {
     console.log(error.message)
     help()
}