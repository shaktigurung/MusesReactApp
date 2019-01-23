import React from "react";

const Input = ({ input, meta, type }) => {
  return (
    <div>
      <input {...input} type={type} autoComplete="off" />
      <div>
        {meta.touched && meta.error}
      </div>
    </div>
  );
}

export default Input;