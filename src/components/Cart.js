import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const clearCart=() => {
        dispatch(clearItems());
    }
    const items = useSelector((store)=>store.cart.items);
    console.log("cart",items)
    return (
        <div > 
            <h1 className="text-center p-2 font-bold text-2xl"> Cart</h1>
             <button className="p-2 border border-black bg-gray-300 m-2" onClick={clearCart}> Clear Cart</button>
            {items.length <1 ? (<h1>Add Food to cart</h1>):
            <ItemList items={items}/>}
        </div>
    )
}
export default Cart;