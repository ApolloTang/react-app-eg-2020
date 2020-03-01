import React from 'react';
import img from './react.png';
import s from './style.module.less';



import FontTest from 'font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <FontTest />
  </div>
);

export default App;
