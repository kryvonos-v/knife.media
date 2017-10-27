import template from './index.pug'

export default function (templateParams) {
  // TODO: Include specific options and merge it with common one.
  const commonOptions = require('../common.options.js')
  const specificOptions = require('./index.options.js')
  const options = Object.assign({}, commonOptions, specificOptions)

  return template(options)
}
