import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

import PropTypes from "prop-types";
import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state={isClicked:false};
  }
  componentDidUpdate(oldProps,oldState){
    setTimeout(()=>{this.setState({isClicked:false})},180)
  }
  render() {
    return (
      <button
        onClick={(evt) => {
          this.setState({isClicked:true});
          props.onClick();
        }}
        className={
          this.state.isClicked ? style.Button + " " + style.clicked : style.Button
        }
        style={{
          backgroundColor: props.bgColor,
          ...props.style,
        }}
      >
        {props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.oneOf(["skyblue", "tomato", "transparent"]),
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string,
    padding: PropTypes.string,
  }),
};
Button.defaultProps = {
  bgColor: "skyblue",
};

export default Button;
