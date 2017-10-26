// TODO: User modernizr loader for webpack.
import '@/vendor/modernizr'

export default function (callback) {
  const isSupportedBrowser = Modernizr.flexwrap && (Modernizr.flexbox || Modernizr.flexboxtweener)

  if (!isSupportedBrowser) {
    // Relocating to other page.
    window.location.href = '/browser-update.html'

    return callback('Your browser is not supported.')
  }

  callback(null)
}
