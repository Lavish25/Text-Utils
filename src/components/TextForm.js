import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("this button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("this button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onchange is calling");
    setText(event.target.value);
  };

  const handleClear = () => {
    console.log("handle clear is calling");
    setText(" ");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <div>
      <div className="form-floating container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Please enter text here</h3>
        <textarea
          className="form-control"
          style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert into UPPERCASE
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={handleLoClick}
        >
          Convert into lowercase
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          Clear
        </button>
        &nbsp;
        <button type="button" className="btn btn-primary" onClick={handleCopy}>
          Copy to clipboard
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <br />
        <br />
        <h5>
          Total Characters {text.length} and Total Words{" "}
          {text.split(" ").length - 1}
        </h5>
        <h4>Preview</h4>
        <p>{text.length>0?text:"enter any text to preview here"}</p>
      </div>
    </div>
  );
}