import React from "react";

function Title(props) {
  console.log("Rendering Titlte");
  return <div>{props.title}</div>;
}

export default React.memo(Title);
