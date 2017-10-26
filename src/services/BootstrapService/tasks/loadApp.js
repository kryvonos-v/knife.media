import '@/assets/styles/main.scss'
import Search from '@/components/Search'

export default function (callback) {
  // Mounting Search component.
  Search.mount()

  callback(null)
}
