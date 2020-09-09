#!/usr/bin/env node

const args = require("./../lib/utils/args")
const banga = require("./../lib")

banga(args.parse(process.argv))