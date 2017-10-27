import EventBus from '@/utils/EventBus'

export default function (callback) {
  // We load youtube api only if it is necessary.
  if (!document.querySelector('.jsYoutubePlayer')) return callback(null)

  window.onYouTubeIframeAPIReady = () => EventBus.emit('youtube.api.ready')

  // This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api"

  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  callback(null)
}
