import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'


const Button = (props) => {
    return <button className={style.Button} style={{
        backgroundColor: props.bgColor
    }}>{props.text}</button>
}

Button.propTypes={
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.oneOf(['skyblue','tomato','transparent']).isRequired
}
export default Button