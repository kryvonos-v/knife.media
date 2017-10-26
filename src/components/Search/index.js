import $ from 'jQuery'
import _ from 'lodash'
import { scrollToTop } from '@/utils'
import { endpoints } from '@/utils/config'

import searchTemplate from './index.pug'
import searchNewsTemplate from './SearchNews/index.pug'

const $window = $(window)
const $body = $('body')
const $siteWrapper = $('#siteWrapper')
const $header = $('#header')
const $mobileSearchBtn = $('#mobileSearchBtn')
const $searchBtn = $('.search-btn')
let $search = null
let $searchInput = null
let $searchResults = null
let $searchLoading = null
let $searchError = null
let $searchNoResults = null

let isShown = false
let timerId = null
// Defines delay that should be taken between any two requests for search results.
// We do this to prevent making of a lot of requests to server.
const debounceDelay = 300

// CSS' classes constants.
const NOSCROLL_CLASS = 'noscroll'
const HEADER_SEARCH_ACTIVE_CLASS = 'header--search-active'
const SEARCH_BTN_ACTIVE_CLASS = 'search-btn--active'
const HIDDEN_CLASS = 'hidden'

let debouncedLoadAndProcessData = null

function mount () {
  initButtonsEventHandlers()
}

function initSearch () {
  // Renders search template
  render()

  $searchInput = $('#searchInput')
  $searchResults = $('#searchResults')
  $searchLoading = $('#searchLoading')
  $searchError = $('#searchError')
  $searchNoResults = $('#searchNoResults')

  initSearchInputEventHanlers()
}

function initButtonsEventHandlers () {
  $searchBtn.click(searchBtnClickHandler)
  $mobileSearchBtn.click(searchBtnClickHandler)
}

function initSearchInputEventHanlers () {
  if ($searchInput === null) throw new Error('Search input is not rendered yet.')

  debouncedLoadAndProcessData = _.debounce(loadAndProcessData, debounceDelay)

  $searchInput.on('input', searchInputEventHandler)
}

function searchInputEventHandler (event) {
  // Removed previous search results.
  $searchResults.html('')

  // Shows text of loading.
  $searchLoading.removeClass(HIDDEN_CLASS)
  // Hides texts for 'no results' and for 'error'.
  $searchNoResults.addClass(HIDDEN_CLASS)
  $searchError.addClass(HIDDEN_CLASS)

  debouncedLoadAndProcessData(event.target.value)
}

function searchBtnClickHandler (event) {
  // Renders search if it is not rendered yet.
  // Creates search on demand.
  if ($search === null) {
    initSearch()
  }

  if (isShown) {
    $siteWrapper.removeClass(NOSCROLL_CLASS)
    $header.removeClass(HEADER_SEARCH_ACTIVE_CLASS)
    $mobileSearchBtn.removeClass(SEARCH_BTN_ACTIVE_CLASS)
    $searchBtn.removeClass(SEARCH_BTN_ACTIVE_CLASS)
  } else {
    scrollToTop()
    $siteWrapper.addClass(NOSCROLL_CLASS)
    $header.addClass(HEADER_SEARCH_ACTIVE_CLASS)
    $mobileSearchBtn.addClass(SEARCH_BTN_ACTIVE_CLASS)
    $searchBtn.addClass(SEARCH_BTN_ACTIVE_CLASS)
  }

  toggleSearchVisibility()
}

function loadAndProcessData (inputValue) {
  $.get(endpoints.SEARCH, { term: inputValue })
    .done(function (data) {
      if (!data.length) {
        $searchNoResults.removeClass(HIDDEN_CLASS)
      }

      var html = searchNewsTemplate({ searchNewsItems: data })

      $searchResults.html(html)
    })
    .fail(function (error) {
      $searchError.removeClass(HIDDEN_CLASS)
    })
    .always(function () {
      $searchLoading.addClass(HIDDEN_CLASS)
    })
}

function render () {
  $search = $($.parseHTML(searchTemplate()))

  $siteWrapper.append($search)
}

function toggleSearchVisibility () {
  if ($search === null) throw new Error('Search is not rendered yet.')

  if (isShown) {
    $search.addClass(HIDDEN_CLASS)
    isShown = false
  } else {
    $search.removeClass(HIDDEN_CLASS)
    isShown = true
  }
}

export default {
  mount
}
