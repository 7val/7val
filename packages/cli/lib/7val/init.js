#!/usr/bin/env node

const cli = require('commander')

cli
  .option('-p, --project', 'unique project name')
  .parse(process.argv)

module.exports = cli
