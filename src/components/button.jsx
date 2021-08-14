import React from "react";

const Button = ({ button, buttonOption, showOption, chgImage, category }) => {
  return (
    <div>
      <div className="line"></div>
      <div className="category-btn">
        <h2>Category</h2>
        {button.map((b, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => showOption(b.category)}
            >
              {b.category}
            </button>
          );
        })}
      </div>
      <div className="line"></div>
      <div className="option-btn">
        <h2>Options</h2>
        {buttonOption.option.map((option, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => chgImage(option, category)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
