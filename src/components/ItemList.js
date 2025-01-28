import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const onAddClick =(item)=>{
//Dispatch an action
console.log("item",item);
    dispatch(addItem(item));
  }
  
  return (
    <div>
      {items.map((item) => (
        <div className="m-2 p-2 border-y-2 "  >
          <div > 
            
            <span className="font-bold">{item.card.info.name}-</span>
            <span className="font-bold"> ${item.card.info.defaultPrice/100||item.card.info.price/100}</span>
            <div className="w-20">
                <button className="absolute border-black bg-black text-white rounded-lg" onClick={() => onAddClick(item)}> Add+</button>
                <img  className=" rounded-lg border-separate border-black" src={CDN_URL+ item.card.info.imageId}/>
               
           </div>
                </div>
                
                
          <div > <p>|{item.card.info.description}</p></div>
         
        </div>
      ))}
    </div>
  );
};
export default ItemList;
