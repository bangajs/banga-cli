#!/usr/bin/env node

const args = require("./../lib/utils/args")
const banga = require("./../lib")
global.log = console.log

banga(args.parse(process.argv))