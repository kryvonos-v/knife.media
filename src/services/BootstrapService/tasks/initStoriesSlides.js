import $ from 'jQuery'
import { breakpoints } from '@/utils'

export default function (callback) {
  const $stories = $('.jsStories')
  const config = {
    appendArrows: null,
    infinite: true,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: breakpoints.lg,
        settings: {
          centerMode: false,
          slidesToScroll: 2,
          slidesToShow: 3,
          variableWidth: true,
        }
      },
      {
        breakpoint: 0,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  }

  !function init () {
    if (!$stories.length) return
    if (!$stories.slick) throw new Error('Include slickjs library (js, css).')

    $stories.on('init', slickInitEventHandler)
    $stories.on('afterChange', slickAfterEventEventHandler)
    $stories.on('beforeChange', slickBeforeChangeEventHandler)
    $stories.on('breakpoint', slickEventHandler)
    $stories.on('destroy', slickEventHandler)
    $stories.on('reInit', slickEventHandler)
    $stories.on('setPosition', slickEventHandler)
    $stories.on('lazyLoaded', slickEventHandler)

    $stories.slick(config)

    window.$stories = $stories
  }()

  function slickEventHandler (event, slick, direction) {
    if (event.type === 'destroy') {
      removeSlickSlidesHeight(slick)
    } else {
      makeSlickSlidesFitToParentHeight(slick)
    }
  }

  function slickInitEventHandler (event, slick, direction) {
    // slick.$list.find('.slick-slide:not([aria-hidden=false])').addClass('stories-opacity')
    // getSlickSlides(slick).addClass('stories-opacity')
    slickEventHandler.apply(this, arguments)
  }

  function slickBeforeChangeEventHandler (event, slick, currentSlideIndex, nextSlideIndex) {
    // var visibleSlides = slick.$list.find('[aria-hidden=false]')
    //
    // visibleSlides.first().addClass('stories-opacity')
    // visibleSlides.last().next().removeClass('stories-opacity')
    slickEventHandler.apply(this, arguments)
  }

  function slickAfterEventEventHandler (event, slick, direction) {
    // var visibleSlides = slick.$list.find('[aria-hidden=false]')
    //
    // visibleSlides.first().prev().prev().removeClass('stories-opacity')
    // visibleSlides.first().prev().addClass('stories-opacity')
    // visibleSlides.last().next().addClass('stories-opacity')
    slickEventHandler.apply(this, arguments)
  }

  function makeSlickSlidesFitToParentHeight (slick) {
    // Reseting height each slide.
    removeSlickSlidesHeight(slick)

    var containerHeight = slick.$slideTrack.outerHeight()

    getSlickSlides(slick).css('height', containerHeight + 'px');
  }

  function removeSlickSlidesHeight (slick) {
    getSlickSlides(slick).css('height', '')
  }

  function getSlickSlides (slick) {
    return slick.$list.find('.slick-slide')
  }

  callback(null)
}
