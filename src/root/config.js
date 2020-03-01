const DEBUG = (process && process.env && process.env.debug === true)
const PROD = (process && process.env && process.env.prod === true)
const TEST = (process && process.env && process.env.NODE_ENV === 'test')

const withReduxLogger = true
const shouldPersistStoreState = false

export {
  DEBUG,
  PROD,
  TEST,
  withReduxLogger,
  shouldPersistStoreState
}
