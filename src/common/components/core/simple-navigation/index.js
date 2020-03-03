import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'


import s from './style.module.less'
const ModuleRoot = ({navigations}) => (
  <div className={`simple-navigation ${s.moduleStyle}`}>
    <ul>
      {
        navigations.map((n,i)=>(
          <li key={i}>
            <NavLink
              exact
              to={n.to}
              activeClassName="is-active" >
              {n.displayText}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ModuleRoot


