/* eslint-env es2020 */

// TODO: polyfill to be removed upon move to Node 20

const { File } = require('node:buffer')

globalThis.File  = globalThis.File ?? File