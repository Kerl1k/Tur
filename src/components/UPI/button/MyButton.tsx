import React from "react";
import classes from "../button/MyButton.module.css";

const MyButton = ({ children, ...props }: any) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
