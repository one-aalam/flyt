# flyt
Super-light javascript library to flatten arrays

### Outline

This library exposes functionality to transalte an array of
arbitarily nested arrays of integers into a flat array of integers. e.g. 
`[[1, 2, [3]], 4] -> [1, 2, 3, 4]`
It is trivial code but organised to support future extensions and is just
one step away from `npm publish`.

### Features

1. Bundles library code into all library targets ie CommonJS, AMD, ES2015 exports, UMD.

### Setup
For build generation, Node is required. Ensure Node's available and run `npm i` in project's root directory. Find build generation step in [Usage](#Usage) section(next). 

### Usage
- New builds could be created anytime running `npm build` or `npm build:min`
- To update examples code, run `npm update:browser-build` or `npm update:node-build`. Distributable file is updated in `/dist` before
  preparing examples.
- Open [index.html](/examples/browser/index.html)(Browser) or fire `node examples/node/index.js`(Node) to check code's
  functionality for respective environment. 
- Method will be available as _flyt.**flatten([])**_
    - Browser: `flyt.flatten([])`
    - Node: `var flyt = require('./flyt'); flyt.flatten([]);`
- Run tests calling `npm run test` from CLI and you shall see something like
  ![flyt_test_pass](/res/flyt_test_pass.gif)

### Drawback

Built for demonstration purposes.
