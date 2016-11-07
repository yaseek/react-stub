class LogProvider {

  constructor () {
    this.flags = {
      debug: true
    }
  }

  debugEnabled (val) {
    this.flags.debug = val
  }
}

class Log {

  constructor (provider) {
    this._provider = provider
  }

  get $provider () {
    return this._provider
  }

  debug (...args) {

    if (this._provider.flags.debug) {
      window.console.debug.apply(null, args)
    }
  }
  
}

let $log = module.exports.$log = new Log(new LogProvider())
module.exports.$logProvider = $log.$provider

