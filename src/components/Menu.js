import {useState,useEffect} from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import useFetchResData from "../utils/useFetchResData"
import RestaurantMenu from "./RestaurantMenu";
const Menu = () => {
    const {resId} = useParams();
    const resInfo = useFetchResData(resId);
    const [showIndex,setShowIndex] = useState(null);
    //console.log("menu", resInfo);
    if(resInfo === null)
        return (<ShimmerUI/>);
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const category = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((cat)=>cat.card.card.itemCards

    );
    console.log("cat",category);
    return (
           <div className="text-center">
            
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <h3 className="text-l">{costForTwoMessage}</h3>
            <p className="font-serif"> {cuisines}</p>
            {/* <h3>Menu</h3>
            <ul>
                {itemCards.map((item)=> <li key ={item.card.info.id}>{item.card.info.name} -  RS: {item.card.info.price / 100}</li>)}
            </ul>  */}
            {
                category.map((cat,index)=>
                    (<RestaurantMenu data={cat?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=> setShowIndex(index)}/>)
                )
            }
        </div>
    )
}
export default Menu;