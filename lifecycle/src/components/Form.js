import React from "react";

const Form = ({ toDoInput, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="toDoInput"
        placeholder="Enter to do"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
