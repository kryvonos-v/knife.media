import template from './index.pug'

export default function (templateParams) {
  const commonOptions = require('./common.options.js')

  return template(commonOptions)
}
