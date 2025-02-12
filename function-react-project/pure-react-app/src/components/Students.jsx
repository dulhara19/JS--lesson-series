import React from "react";
const Students = ({ ...props }) => {
  return (
    <div className="divcls">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.country}</h3>
    </div>
  );
};
export default Students;
