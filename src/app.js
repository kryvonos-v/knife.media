'use strict'

import './templates/index.pug'
import './assets/styles/main.scss'
import './vendor/modernizr'
import utils from '@/utils.js'

const isSupportedBrowser = Modernizr.flexwrap && (Modernizr.flexbox || Modernizr.flexboxtweener)

if (!isSupportedBrowser) {
  window.location.href = '/browser-update.html'
}
