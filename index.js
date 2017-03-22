
/* simple fs-extra `Promise` wrapper */

const promisify = require('promisify-node')
module.exports = promisify('fs-extra')

// ^_^ ...that's all folks.