import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    // console.log("Uppercase conversion on mouse click fired");
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Empty text", "warning");
    } else {
      props.showAlert("Converted to uppercase", "success");
    }
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    if (text === "") {
      props.showAlert("Empty text", "warning");
    } else {
      props.showAlert("Removed extra spaces", "success");
    }
  };

  const handleLowerCase = () => {
    // console.log("Uppercase conversion on mouse click fired");
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Empty text", "warning");
    } else {
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const handleClearcase = () => {
    // console.log("Uppercase conversion on mouse click fired");
    let newText = "";
    setText(newText);
    if (text === "") {
      props.showAlert("Text is already empty", "warning");
    } else {
      props.showAlert("Text is cleared", "success");
    }
  };

  const handleOnChange = (event) => {
    // console.log("onChange event fired");
    setText(event.target.value);
  };

  const handlerCopyText = () => {
    navigator.clipboard.writeText(text);
    if (text === "") {
      props.showAlert("Empty Text", "warning");
    } else {
      props.showAlert("Text copied to clipboard", "success");
    }
  };
  return (
    <>
      <div
        className={`container text-center text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="mb-3 mt-1">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            placeholder="Enter your text here"
            value={text}
            className="form-control"
            id="myBox"
            rows="6"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#193c70" : "white",
            color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0}
          type="submit"
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearcase}
        >
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlerCopyText}>
          Copy Text
        </button>
        <button disabled={text.length===0}
          type="submit"
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpperCase}
        >
          Convert to uppercase
        </button>
        <button disabled={text.length===0}
          type="submit"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerCase}
        >
          Convert to lowercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleRemoveExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-center text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your text format is</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>
          Average time to read the text :{" "}
          {0.008 * 60 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Seconds.{" "}
        </p>
        <h2>
          <strong>Text Preview</strong>
        </h2>
        <div
          id="textPreview"
          className="container my-2 py-2"
          style={{
            backgroundColor: props.mode === "dark" ? "#193c70" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <p>
            {text.length > 0
              ? text
              : "Nothing to show here"}
          </p>
        </div>
      </div>
    </>
  );
}
