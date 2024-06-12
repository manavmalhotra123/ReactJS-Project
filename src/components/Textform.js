import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleclearClick = () => {
    setText("");
  };


  return (
    <>
      <div className="container">
        <h1 className="heading">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleLoClick}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleclearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-4">
        <br />
        <h1 className="Headings">Your Text Summary</h1>
        <p className="my-1">Characters : {text.length}</p>
        <p className="my-1">Words : {text.split(" ").length}</p>
        <p>
          Average time to read the text : {text.split(" ").length * 0.008}{" "}
          mintues
        </p>
      </div>

      <h1 className="container my-4 mh-6">Preview</h1>
      <p>{text}</p>
    </>
  );
}
