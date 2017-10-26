import { vendor } from '@/utils/config'

export default function (callback) {
  // The list of css classes that are itended for using slickjs.
  const requireSlick = ['.jsStories']
  const needToLoad = requireSlick.some(selector => document.querySelector(selector))

  if (needToLoad) {
    // const link = document.createElement('link')
    // link.href = vendor.slick.css
    // link.rel = 'stylesheet'
    //
    // console.log('link')
    //
    // const firstStyleTag = document.head.getElementsByTagName('style')[0]
    // firstStyleTag.parentNode.insertBefore(link, firstStyleTag)

    const script = document.createElement('script')
    script.src = vendor.slick.js

    const scriptTags = document.getElementsByTagName('script')
    const lastScriptTag = scriptTags[scriptTags.length - 1]

    lastScriptTag.parentNode.insertBefore(script, lastScriptTag)
  }

  callback(null)
}
