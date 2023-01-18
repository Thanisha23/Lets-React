import React, { useState } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import Tick from "../Tick.json";

export const TextForm = (props) => {
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the state
  // setText("Hello"); //right way to change the state

  //Inline css in 1st button
  // const styles = {
  //   btn: {
  //     backgroundColor: "#8064A2",
  //   },
  // };

  let myStyle = {
    color: "white",
    backgroundColor: "black",
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);

    setText("");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
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

  return (
    <>
      {/* <div className="container" style={myStyle}> */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-success mx-1 my-2"
          // style={styles.btn}
          onClick={handleUpClick}
          data-toggle="modal"
          data-target="#centralModalSuccess"
        >
          Convert to Uppercase
        </button>

        {/* Central Modal Medium Success  */}
        <div
          className="modal fade"
          id="centralModalSuccess"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-notify modal-success"
            role="document"
          >
            {/* Content */}
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <p className="heading lead mx-5">
                  Your text is converted into Uppercase
                </p>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="white-text">
                    &times;
                  </span>
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <div className="text-center">
                  <Lottie animationData={Tick} />
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer justify-content-center">
                <a type="button" className="btn btn-success">
                  TextGenie has Granted your Wish!!{" "}
                  <i className="far fa-gem ml-1 text-white"></i>
                </a>
              </div>
            </div>
            {/* Content */}
          </div>
        </div>
        {/* Central Modal Medium Success */}

        <button
          className="btn btn-success mx-1 my-3"
          onClick={handleLoClick}
          data-toggle="modal"
          data-target="#centralModalSuccess"
        >
          Convert to Lowercase
        </button>
        {/* Central Modal Medium Success  */}
        <div
          className="modal fade"
          id="centralModalSuccess"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-notify modal-success"
            role="document"
          >
            {/* Content */}
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <p className="heading lead mx-5">
                  {" "}
                  Your text is converted into Uppercase
                </p>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="white-text">
                    &times;
                  </span>
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <div className="text-center">
                  <Lottie animationData={Tick} />
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer justify-content-center">
                <a type="button" className="btn btn-success">
                  TextGenie has Granted your Wish!!{" "}
                  <i className="far fa-gem ml-1 text-white"></i>
                </a>
              </div>
            </div>
            {/* Content */}
          </div>
        </div>
        {/* Central Modal Medium Success */}

        <button className="btn btn-success mx-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
};

TextForm.propTypes = {
  // heading: PropTypes.string.isRequired,
  heading: PropTypes.string,
};

export default TextForm;
