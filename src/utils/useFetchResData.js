import { useState,useEffect } from "react";

const useFetchResData =(resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId);
    },[])

    fetchMenu = async()=>{
        const data = await fetch();
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}
export default useFetchResData;