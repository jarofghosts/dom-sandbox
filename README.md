dom-sandbox
===========

[![Build Status](http://img.shields.io/travis/jarofghosts/dom-sandbox.svg?style=flat)](https://travis-ci.org/jarofghosts/dom-sandbox)
[![npm install](http://img.shields.io/npm/dm/dom-sandbox.svg?style=flat)](https://www.npmjs.org/package/dom-sandbox)

super-simple dom sandboxing for tests

## Why?

Often times during front-end testing you want to insert some HTML into the DOM 
or have a dummy element to render things into. This gives you a super-simple
way to do that while also preventing you from:

* stomping on things that something like [testling](http://npm.im/testling)
  might need in the DOM
* creating tons of elements and forgetting to tear them down
* writing this boilerplate, albeit minimal

## How?

```js
var dom = require('dom-sandbox')

var testWidget = require('../widget/to/test')

dom('<div id="test-div"><span rel="something-necessary"></span></div>')

testWidget(document.getElementById('test-div'))
```

or

```js
var dom = require('dom-sandbox')

var testWidget = require('../something/else')

testWidget(dom()) // pass the element directly
```

## Notes

* Also provides a `.destroy()` method that removes the generated element from
  the DOM.

## license

MIT
