import React  from "react";

const styles = {
  button : {
    border: "0",
    margin: "8px",
    padding: "10px 14px",
    fontSize: "16px",
    cursor : "pointer",
  },
};
const Button = (props) => {
    return (
      <button className={props.className} onClick={props.click}  style={ {...styles.button, ...props.style}}>
        {props.children}
      </button>
    );
  }

  export default Button;
