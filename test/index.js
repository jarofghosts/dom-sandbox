var test = require('tape')

var dom = require('../')

test('creates a single element in the dom', function(t) {
  t.plan(3)

  t.equal(document.getElementsByTagName('div').length, 0)

  dom()

  t.equal(document.getElementsByTagName('div').length, 1)

  dom()

  t.equal(document.getElementsByTagName('div').length, 1)
})

test('sets innerHTML of element if provided, clears it if not', function(t) {
  t.plan(3)

  t.ok(!document.getElementById('derp'))

  dom('<div id="derp"></div>')

  t.ok(document.getElementById('derp'))

  dom()

  t.ok(!document.getElementById('derp'))
})

test('returns the created/updated element', function(t) {
  t.plan(2)

  var el = dom('<div class="herp"></div>')

  t.ok(el instanceof HTMLElement)
  t.equal(el.getElementsByClassName('herp').length, 1)
})

test('destroy method removes element from dom', function(t) {
  t.plan(3)

  dom('<div id="merp"></div>')

  t.ok(document.getElementById('merp'))
  dom.destroy()

  t.ok(!document.getElementById('merp'))

  t.doesNotThrow(function() {
    dom.destroy()
  })
})
