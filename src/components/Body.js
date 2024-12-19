import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
//import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
const Body = ()=>{
    const [restaurantList,setRestList] = useState([]);
    const [searchEle,setSearchEle] = useState(" ");
    const [filterRestaurant,setFilterRes] = useState([]);
    useEffect(()=>{
      fetchData();
    },[]);

   
     const fetchData = async ()=>{
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9819211&lng=77.725178&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const datajson = await data.json();
         console.log(datajson);
         setRestList(datajson?.data?.cards[1]?.card ?.card?.gridElements?.infoWithStyle?.restaurants);//optional chaining
         setFilterRes(datajson?.data?.cards[1]?.card ?.card?.gridElements?.infoWithStyle?.restaurants);
          
       }
       if(useOnlineStatus() === false) {
        return (<h1>Something went wrong !!. Check your internet </h1>)
       }

       if(restaurantList.length === 0) {
        return (<ShimmerUI/>);
       }
    
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input value={searchEle} onChange={(e)=>{
                            setSearchEle(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchEle);
                        const updatedList = restaurantList.filter((res)=> {
                            const src=res.info.name.toLowerCase(); 
                           return  src.includes(searchEle.toLowerCase());
                        }
                        );
                        setFilterRes(updatedList);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                   const  resFilter = restaurantList.filter((res)=> res.info.avgRating > 4
                    );
                    setFilterRes(resFilter);                    
                }}> Top rated Restaurant</button>
            </div>
            <div className="resContainer">
                {
                    filterRestaurant?.map(restaurant => (<Link to={"/restaurants/"+restaurant?.info.id}><RestaurantCard  resData={restaurant}/> </Link>)
                    )
                }
                {/* <RestaurantCard  resData={resObj} /> */}
                
            </div>
        </div>
    );
};
export default Body;