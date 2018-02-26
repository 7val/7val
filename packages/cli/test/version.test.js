const test = require('tape')

test('7val --version', function (t) {
  t.plan(1)
  const pkg = require('../package.json')
  const cli = require('../lib/7val')
  t.equal(cli.version(), pkg.version, 'from package.json')
})
