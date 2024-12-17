/**<div id="parent" >
    <div id="child">
        <h1>i m h1</h1>
    </div>
  </div> **/
  import React from "react";
  import ReactDOM from "react-dom";
//   const parent = React.createElement("div",{id:"parent"}, // 3rd argument is child to be passed
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"i m h1"
   
//         )
//     )
//   );
// const header =React.createElement("h1",{},"hello I am react");
//React element 
const jsxInner = (<h1>
   "hello Dora!!"
</h1>)
const jsxHeader = (<h1 id="header">
   Hello Wasifa !!
   {jsxInner}
   </h1>)

//other component
const Other =()=>{
   return (<h1> i m inner</h1>);
}
var name =" Fly high";
//React  Functional Component 
const HeadingComponent = ()=>{
   return (<h1>First React component
           <Other/>
           {name}
   </h1>);
};

    const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(jsxHeader);
    root.render(<HeadingComponent/>)