import React from 'react'
import ReactDom from 'react-dom'

import fonts from 'common/fonts/'
import './main.less'
import { Root } from './root/'

const appContainer = document.getElementById('app-container')
ReactDom.render( <Root/>,  appContainer)



