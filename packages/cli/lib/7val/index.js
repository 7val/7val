#!/usr/bin/env node

const cli = require('commander')
const pkg = require('../../package.json')

cli
  .version(pkg.version)
  .command('init', 'interactively create a 7val project')
  .parse(process.argv)

module.exports = cli
