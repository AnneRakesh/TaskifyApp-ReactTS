import React from "react";
import "./Styles.css"

const InputField: React.FC = () => {
  return (
    <form className="input">
      <input type="input" placeholder=" Enter a Task" className="input__box" />
      <button type="submit" className="input__submit">
        {" "}
        Go{" "} 
      </button>
    </form>
  );
};

export default InputField;
