import {useState,useEffect} from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
const Menu = () => {
    const {resId} = useParams();
    const resInfo = useFetchResData(resId);
    if(resInfo === null)
        return (<ShimmerUI/>);
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards);
    return (
           <div className="menu">
            
            <h2>{name} </h2>
            <h3>{costForTwoMessage}</h3>
            <p>{cuisines}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item)=> <li key ={item.card.info.id}>{item.card.info.name} -  RS: {item.card.info.price / 100}</li>)}
            </ul> 
        </div>
    )
}
export default Menu;