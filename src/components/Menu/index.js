import $ from 'jQuery'

const $window = $(window)
const $mainNav = $('#mainNav')
const $mainMenu = $('#mainMenu')
const $menuBurger = $('#menuBurger')

const BURGER_ACTIVE_CLASS = 'burger--active'

function mount () {
  $mainMenu.smartmenus()
  $menuBurger.click(toggle)
}

function toggle () {
  $menuBurger.toggleClass(BURGER_ACTIVE_CLASS)
  $mainNav.slideToggle()
}

function open () {
  $menuBurger.addClass(BURGER_ACTIVE_CLASS)
  $mainNav.slideDown()
}

function close () {
  $menuBurger.removeClass(BURGER_ACTIVE_CLASS)
  $mainNav.slideUp()
}

export default {
  open,
  close,
  toggle,
  mount
}
