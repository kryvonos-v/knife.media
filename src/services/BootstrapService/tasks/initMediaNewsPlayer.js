import $ from 'jQuery'
import EventBus from '@/utils/EventBus'

export default function (callback) {
  const $mediaNewsMediaControl = $('.jsMediaNewsMediaControl')
  const $mediaNewsVideoPlayer = $('.jsMediaNewsVideoPlayer')

  EventBus.on('youtube.api.ready', () => {
    $mediaNewsVideoPlayer.each(function () {
      createPlayer(this)
    })
  })

  function createPlayer (elem) {
    const player = new YT.Player(elem, {
      height: '390',
      width: '640',
      videoId: '0JhtnSYOJYI',
      events: {
        onReady: () => onPlayerReady.call(player)
      }
    })
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady() {
    const $mediaNewsVideoPlayer = $(this.a)
    const $mediaNews = $mediaNewsVideoPlayer.closest('.jsMediaNews')
    const $mediaNewsMediaControl = $mediaNews.find('.jsMediaNewsMediaControl')

    if (!$mediaNews.length || !$mediaNewsMediaControl.length) return

    $mediaNewsMediaControl.click(event => onMediaControlClick.call(event, event, this))
  }

  function onMediaControlClick (event, player) {
    const $target = $(event.target)
    const $mediaNews = $target.closest('.jsMediaNews')

    $mediaNews.addClass('media-news--in-action')
    player.playVideo()
  }

  callback(null)
}
