import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  //console.log(props);
  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 180);
  }, [isClicked]);

  return (
    <button
      onClick={(evt) => {
        setIsClicked(true);
        props.onClick();
      }}
      className={isClicked ? style.Button + " " + style.clicked : style.Button}
      style={{
        backgroundColor: props.bgColor,
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};

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
