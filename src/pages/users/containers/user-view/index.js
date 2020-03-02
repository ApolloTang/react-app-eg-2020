import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';


import s from './style.module.less';



const Component =(props) => {
  const userId = props.match.params.userId
  console.log('xxx userId', userId)
  console.log('xxx props', props)

  React.useEffect(()=>{
    props.dispatch_init();
    props.dispatch_fetchUser(userId);
    return () => { }
  }, [])

  React.useEffect(()=>{
    props.dispatch_fetchUser(userId);
    return () => { }
  }, [userId])

  if (props.isLoading) {
    return(
      <>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </>
    )
  }

  return ( <div>{JSON.stringify(props.users[userId], null, 2)}</div> )
}



const Connected = connect(mapStoreToProps, mapDispatchToProps)(withRouter(Component));
export {Connected as UserView}

