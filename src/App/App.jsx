import React from 'react'
import Button from './components/Button/Button.jsx';
const App = (props) => {
  return <div className='App'>
    DEMAT BREIZH<hr />
    <Button text="Bejamin" color="red" style={{ width: '254px', padding: '60px 80px' }} />
    <Button
      text="button"
      bgColor='skyblue'
      onClick={(arg) => console.log('button 2 clické',arg) } />
  </div>
};
export default App;