import React from 'react'
import Button from './components/Button/Button.jsx';
const App=(props) => {
  return <div className='App'>
    DEMAT BREIZH<hr/>
    <Button text="Bejamin" color="red" style={{width:'254px',padding:'60px 80px'}}/>
    <Button text="button" bgColor='skyblue'/>
  </div>
};
export default App;