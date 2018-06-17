// This is an example of a shared service, encapsulated in a class.
// The class constructor gets the event bus and registers callbacks
// for different log events. Throughout the app, log events can be
// published via "EventBus.$emit('LOG_DEBUG'),'Log-Message')".
// With this loose coupling, log events could be processed also
// by other services or by no service at all. The code where the
// event is emitted does not need to know about the configuration.
// Another option would be to import the instance of this class
// (created in main.js) and call the log-methods directly. However,
// this would couple the implementation to the calling part.
export default class ConsoleLogger {
  constructor(EventBus) {
    EventBus.$on('LOG_DEBUG', text => this.debug(text))
    EventBus.$on('LOG_WARN', text => this.warn(text))
    EventBus.$on('LOG_ERROR', text => this.error(text))
    return {
      debug: this.debug,
      warn: this.warn,
      error: this.error
    }
  }

  debug(debugText) {
    console.debug(debugText)
  }

  warn(warnText) {
    console.warn(warnText)
  }

  error(errorText) {
    console.error(errorText)
  }
}
