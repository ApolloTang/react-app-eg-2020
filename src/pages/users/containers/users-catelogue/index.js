import React from 'react'
import _get from  'lodash/get'
import {connect} from 'react-redux'
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom'


import {mapStoreToProps, mapDispatchToProps} from './selector'

import s from './style.module.less';
const Catalog = (props) => {


  // constructor(props) {
  //   super(props);
  //   this.handle_getUserCatelog = this.handle_getUserCatelog.bind(this);
  // }
  // componentDidMount() {
  //   this.props.dispatch_init();
  //   this.handle_getUserCatelog();
  // }
  // handle_getUserCatelog() {
  //   this.props.dispatch_fetchUserCatelog();
  // }

  React.useEffect(()=>{
    console.log('component mounted, will fetch data')

    props.dispatch_init();
    props.dispatch_fetchUserCatelog();
    return () => {
      console.log('Dialogue unmounted, will cancel fetch data')
    }
  }, [])

  // const userIdInParam = props.match.params.userId
  return (props.isLoading) ? (
    <div>
      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    </div>
  ):(
    <div
      className={`userCatelog ${s.moduleStyle}}`} >
      foo
    </div>
  )
};

const connectedComponent = connect(mapStoreToProps, mapDispatchToProps)(Catalog)
export {connectedComponent as UsersCatelogue}
