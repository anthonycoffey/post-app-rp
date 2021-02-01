import React from "react";
import renderHTML from "react-render-html";
import "./Text.scss";

const Text = ({ data }) => {
  return (
    <div
      id={data.id}
      className={`text-wrapper ${data.classNames ? data.classNames : ""}`}
      style={data.style || {}}
    >
      <div
        className={`text ${data.classNames || ""}`}
        style={data.style || {}}
      >
        {renderHTML(data.content)}
      </div>
    </div>
  );
};

export default Text;