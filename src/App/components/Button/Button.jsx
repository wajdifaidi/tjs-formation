import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'


const Button = (props) => {
    return <button className={style.Button} style={{
        backgroundColor: props.bgColor,
        ...props.style,
    }}>{props.text}</button>
}

Button.propTypes={
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.oneOf(['skyblue','tomato','transparent']),
    style: PropTypes.shape({
        width: PropTypes.string,
        padding: PropTypes.string,
    })
}
Button.defaultProps={
    bgColor:'skyblue'
}

export default Button