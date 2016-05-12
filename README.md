# query-params
Very simple CommonJS-module to encode/decode query parameters

[![Build Status](https://api.travis-ci.org/finn-no/query-params.png)](https://travis-ci.org/finn-no/query-params)
[![NPM](https://nodei.co/npm/query-params.png?stars=true&downloads=true)](https://npmjs.org/package/query-params)

Convert object to query string or opposite. You need Browserify or similar to use this in a browser. Will work in IE9+

## Installation

`npm install query-params --save`

## Example usage

```js
var params = require('query-params');

params.encode({'foo': 'bar', 'a': 'b'}); // 'foo=bar&a=b'

params.decode('foo=bar&a=b'); // {'foo': 'bar', 'a': 'b'}
```
