import React from 'react'

const Button = (props) => {
    //console.log(props);
    // let x=props.text.substr(2,2);
    return <button className='Button'>{props.text}</button>
}

export default Button