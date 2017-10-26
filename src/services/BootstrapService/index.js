import series from 'async-series'
import * as tasks from './tasks'

export default {

  run () {
    return new Promise((resolve, reject) => {
      series(
        Object.values(tasks),
        error => {
          if (error) {
            // During bootstrapping error existed so application cannot be launched.
            return reject(error)
          }

          // Starting application.
          resolve(null)
        }
      )
    })
  }

}
