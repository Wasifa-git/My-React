/**<div id="parent" >
    <div id="child">
        <h1>i m h1</h1>
    </div>
  </div> **/
  import React from "react";
  import ReactDOM from "react-dom";
  const parent = React.createElement("div",{id:"parent"}, // 3rd argument is child to be passed
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"i m h1"
    
        )
    )
  );
const header =React.createElement("h1",{},"hello I am react");
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent);