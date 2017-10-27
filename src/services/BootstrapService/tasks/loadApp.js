import '@/assets/styles/main.scss'
import Search from '@/components/Search'
import Menu from '@/components/Menu'
import EventBus from '@/utils/EventBus'

export default function (callback) {
  // Mounting Search component.
  Search.mount()
  Menu.mount()

  EventBus.on('search.shown', () => Menu.close())

  callback(null)
}
