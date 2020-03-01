import {TEST, PROD, withReduxLogger} from 'root/config';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = [
  thunk
]

if ( withReduxLogger ) {
  middleware.push(
    createLogger()
  )
}

export { middleware }

