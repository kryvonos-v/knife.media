import $ from 'jQuery'

export default function (callback) {
  const $window = $(window)
  const $mainNav = $('#mainNav')
  const $mainMenu = $('#mainMenu')
  const $menuBurger = $('#menuBurger')

  const BURGER_ACTIVE_CLASS = 'burger--active'

  !function init () {
    $mainMenu.smartmenus()
  }()

  $menuBurger.click(() => {
    $menuBurger.toggleClass(BURGER_ACTIVE_CLASS)
    $mainNav.slideToggle()
  })

  callback(null)
}
