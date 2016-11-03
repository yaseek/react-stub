
class LogProvider {

  constructor () {
    this.flags = {
      debug: true
    }
  }

  debugEnabled (val) {
    this.flags.debug = val;
  }
}

class Log {

  constructor (provider) {
    this._provider = provider;
  }

  get $provider () {
    return this._provider;
  }

  debug (...args) {
    let provider = this._provider;

    if (provider.flags.debug) {
      console.log.apply(null, args)
    }
  }
}

const $log = new Log(new LogProvider())

module.exports.$log = $log
module.exports.$logProvider = $log.$provider

