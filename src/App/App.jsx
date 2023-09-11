import React from 'react'
import Button from './components/Button/Button.jsx';
const App = (props) => {
  return <div className='App'>
    DEMAT BREIZH<hr />
    <Button  color="red" style={{ width: '254px', padding: '60px 80px' }} >
        Benjamin 
        <img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/tick_success_done_valid-2-256.png" style={{height:"32px",width:"32px"}}/>
    </Button>
    <Button
      text="button"
      bgColor='skyblue'
      onClick={(arg) => console.log('button 2 clické',arg) } />
  </div>
};
export default App;