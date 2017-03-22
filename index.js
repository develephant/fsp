
/* simple fs-extra `Promise` wrapper */

const promisify = require('promisify-node')
module.exports = promisify('fs-extras')

// ^_^ ...that's all folks.