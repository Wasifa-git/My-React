import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import {useState,useEffect,useContext} from "react";
const Body = ()=>{
    const {user,setUser} = useContext(UserContext);
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
       //First order component
       const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    return (
        <div className="body">
            <div className="filter flex mx-2">
                <div className="search mx-2 p-2">
                    <input className="border border-solid border-black" value={searchEle} onChange={(e)=>{
                            setSearchEle(e.target.value);
                    }}></input>
                    <button  className="bg-green-200 py-1 px-4 m-4 rounded-lg" onClick={()=>{
                        console.log(searchEle);
                        const updatedList = restaurantList.filter((res)=> {
                            const src=res.info.name.toLowerCase(); 
                           return  src.includes(searchEle.toLowerCase());
                        }
                        );
                        setFilterRes(updatedList);
                    }}>search</button>
                </div>
                <div className="flex items-center px-4 py-2 ">
                    <button className="filter-btn bg-green-200 px-4 py-1 flex  rounded-lg" onClick={()=>{
                    const  resFilter = restaurantList.filter((res)=> res.info.avgRating > 4
                        );
                        setFilterRes(resFilter);                    
                    }}> Top rated Restaurant</button>
                    <div>
                    <input className="border border-black m-2 p-1" value={user} onChange={(user)=> setUser(user.target.value)}/>
                </div>
                </div>
                
               
            </div>
            <div className="resContainer flex flex-wrap py-2 m-4">
                {
                    filterRestaurant?.map(restaurant => (
                        
                    <Link to={"/restaurants/"+restaurant?.info.id}>
                        { restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/> )}
                        </Link>
                )
                    )
                }
                {/* <RestaurantCard  resData={resObj} /> */}
                
            </div>
        </div>
    );
};
export default Body;