class EventBusService {
  constructor () {
    this.events = {}
  }

  on (event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = []
    }

    this.events[event].push(listener)
  }

  off (event, listener) {
    let idx

    if (typeof this.events[event] === 'object') {
      idx = this.events[event].indexOf(listener)

      if (idx > -1) {
        this.events[event].splice(idx, 1)
      }
    }
  }

  emit (event, ...args) {
    let i
    let listeners
    let length

    if (typeof this.events[event] === 'object') {
      listeners = this.events[event].slice()
      length = listeners.length

      for (i = 0; i < length; i++) {
        listeners[i].apply(this, args)
      }
    }
  }

  once (event, listener) {
    this.on(event, function fn () {
      this.removeListener(event, fn)
      listener.apply(this, arguments)
    })
  }
}

export default EventBusService
