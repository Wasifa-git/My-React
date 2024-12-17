import React from "react";
import ReactDOM from "react-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};
const cardStyle={
    backgroundColor:"#f0f0f0" ,
    padding:"2px",
    margib:"2px" // for inline styling
}
const RestaurantCard=()=>{
    return (
        <div className="resCard" style={cardStyle}>
            <img className="card-logo" alt="card-img" src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"/>
            <h3>Haji Biriyani</h3>
            <h3>rating 4.4</h3>
            <h3>Delivery in 45 min</h3>
        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resContainer">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
