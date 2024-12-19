import React,{lazy}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Menu from "./components/Menu";
import { Suspense } from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
  
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/restaurants/:resId",
        element:<Menu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement:<Error/>
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
