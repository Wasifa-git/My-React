import { useState ,useEffect} from "react";
const User = (props)=>{
    const [count] = useState(0);
    useEffect(()=>{
            const timer = setInterval(()=>{
                console.log("hello")
            },2000);
          return ()=>{  // this method will call while unmounting /leaving the page
            clearInterval(timer);  
          }
    },[])
    return (
        <div>
            <h1>{count}</h1>
            <h1>{props.name}</h1>
            <h2>WB</h2>
        </div>
        
    )
}
export default User;