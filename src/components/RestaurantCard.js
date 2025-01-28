import { CDN_URL } from "../utils/constants";

// const cardStyle={
//     backgroundColor:"#f0f0f0" ,
//     padding:"2px",
//     margin:"2px" // for inline styling
// }
const RestaurantCard=(props)=>{  
    const {resData} = props;  
    const {name,avgRating,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    // const {name,avgRating,deliveryTime} = props;
    //style={cardStyle}
    return (
          <div className="resCard   px-4 py-4 m-4 space-x-6  w-[250px] rounded-lg bg-gray-200 hover:bg-zinc-500" >
            <img className="card-logo rounded-lg p-4" alt="card-img" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h4>Rating{avgRating}</h4>
            <h4>Delivery in {deliveryTime} min</h4>
        </div>
    );
};
//First order component
 export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
            <label className=" absolute m-1 p-1 bg-black text-white">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
        );
        
    };
 };
export default RestaurantCard;