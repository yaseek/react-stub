import { $log } from '../../services/log'

/*eslint-disable */
export const logger = store => next => action => {
  $log.debug('ACTION:', action.type, 'DATA:', action.payload)
  $log.debug('STORE:', store, store.getState())
  return next(action)
}
/*eslint-enable */