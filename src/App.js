import React,{lazy,useState,useEffect}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Menu from "./components/Menu";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
  const [user,setUser] = useState();
    useEffect(()=>{
      // API call to fetch user for authentication
       const data ={
        name:"Wasifa"
       }
       setUser(data.name);
   },[]);
   console.log("user:",user)
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser:user,setUser}}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ],
    errorElement:<Error/>
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
