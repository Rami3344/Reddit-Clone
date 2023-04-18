import React from "react";

function Comments(props) {
  return (
    <div className="comments">
      <span>💬{props.comments}</span>
    </div>
  );
}

export default Comments;
