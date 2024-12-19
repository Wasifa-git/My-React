import { CDN_URL } from "../utils/constants";

const cardStyle={
    backgroundColor:"#f0f0f0" ,
    padding:"2px",
    margin:"2px" // for inline styling
}
const RestaurantCard=(props)=>{  
    const {resData} = props;  
    const {name,avgRating,deliveryTime,cloudinaryImageId} = resData?.info;
    // const {name,avgRating,deliveryTime} = props;
    
    return (
        <div className="resCard" style={cardStyle}>
            <img className="card-logo" alt="card-img" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>Rating{avgRating}</h4>
            <h4>Delivery in {deliveryTime} min</h4>
        </div>
    )
}
export default RestaurantCard;