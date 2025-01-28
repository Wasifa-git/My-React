import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantMenu =({data,showItems,setShowIndex})=>{
    //const [changeShowItem,setChangeShowItem] = useState(false);
     const handleClick = () => {
        
            setShowIndex();
     }
    return (
        <div>
            {/* Accordion header */}
            
            <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 ">
            <div className="flex justify-between cursor-pointer"onClick={handleClick} >
                <span className="font-bold" >{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            
            <div>
               { showItems  && <ItemList items={data.itemCards}/>}
            </div>
            
            </div>
            
           
           
        </div>
    );
}
export default RestaurantMenu;