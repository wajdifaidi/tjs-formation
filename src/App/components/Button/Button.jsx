import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
    //console.log(props);
    // let x=props.text.substr(2,2);
    return <button className={style.Button}>{props.text}</button>
}

export default Button