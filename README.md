# `fsp`

### A simple Promise wrapper for fs-extra.

![js-badge](https://img.shields.io/badge/javascript-ES2017-brightgreen.svg)
![node-badge](https://img.shields.io/badge/node-v7-brightgreen.svg)

## Install

```
npm i @develephant/fsp --save
```

## Usage

```js
const fsp = require('@develephant/fsp')
```

## Example

```js
//in async function
async function copyIt(src, dest) {
  await fsp.copy(src, dest)
    .then(res => console.log(res))
    .catch(err => console.error(err))
}
```

## Resources

__[fs-extra](https://github.com/jprichardson/node-fs-extra)__

__[promisify-node](https://github.com/nodegit/promisify-node/blob/master/package.json)__

---

#### `fsp` &Star; &copy; 2017 develephant &Star; MIT license
