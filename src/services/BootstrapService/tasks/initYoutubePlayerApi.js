import $ from 'jQuery'
import EventBus from '@/utils/EventBus'

export default function () {
  window.onYouTubeIframeAPIReady = () => EventBus.emit('youtube.api.ready')

  // This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api"

  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}
