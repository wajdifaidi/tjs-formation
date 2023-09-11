import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'


const Button = (props) => {
    //console.log(props);
    return <button onClick={(props.onClick)} className={style.Button} style={{
        backgroundColor: props.bgColor,
        ...props.style,
    }}>{props.children}</button>
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.oneOf(['skyblue','tomato','transparent']),
    onClick: PropTypes.func.isRequired,
    style: PropTypes.shape({
        width: PropTypes.string,
        padding: PropTypes.string,
    })
}
Button.defaultProps={
    bgColor:'skyblue'
}

export default Button