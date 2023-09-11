import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
    return <button className={style.Button} style={{
        backgroundColor: props.bgColor
    }}>{props.text}</button>
}

export default Button