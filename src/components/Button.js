import React  from "react";


const Button = (props) => {
    return (
      <button onClick={props.onClick} className={`b-0 m-08 p-1-014 font-016 cursor-pointer ${props.className} `}  {...props.disabled}>
        {props.children}
      </button>
    );
  }

  export default Button;
