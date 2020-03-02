import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';


import s from './style.module.less';

const Component =(props) => {
  const userId = props.match.params.userId
  console.log('xxx userId', userId)

  React.useEffect(()=>{
    props.dispatch_init();
    return () => {
      console.log('Dialogue unmounted, will cancel fetch data')
    }
  }, [])

  props.dispatch_fetchUser(userId);

  return ( <div>userView</div> )
}



const Connected = connect(mapStoreToProps, mapDispatchToProps)(withRouter(Component));
export {Connected as UserView}

