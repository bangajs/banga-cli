#!/usr/bin/env node

require("./../lib/utils/app").parse()
const help = require("./../lib/cmd/help")
const banga = require("./../lib")

try {
     banga()
} catch (error) {
     console.log(error.message)
     help()
}