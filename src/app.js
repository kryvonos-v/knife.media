'use strict'

require('./assets/styles/main.scss')
require('./vendor/modernizr')

const isSupportedBrowser = Modernizr.flexwrap && (Modernizr.flexbox || Modernizr.flexboxtweener)

if (!isSupportedBrowser) {
  window.location.href = '/browser-update.html'
}
