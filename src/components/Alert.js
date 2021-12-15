import React from "react";

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="mt-1" style={{height:'50px'}}>
    {props.alert &&
    <div
      className={`container alert alert-${props.alert.type} alert-dismissible fade show text-center`}
      role="alert"
    >
      {capitalize(props.alert.type)} : {props.alert.message}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>}
    </div>
  );
}
