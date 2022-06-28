import React from "react";

function Button(props) {
  const { buttonText, clickFunction } = props;
  console.log(`buttonClicked ${buttonText}`);
  return <button onClick={clickFunction}>{buttonText}</button>;
}

export default React.memo(Button);
