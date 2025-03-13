import { useState } from "react";
import css from "../Button/Button.module.css"
export default function Button(){

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
      setClicks (clicks + 1);
    };

    return(
        < div className = {css.container}>
        {/* <div> */}
    <button className={css.button} type="button" onClick ={handleClick}> Clicks: {clicks}</button>
        </div>
      
        
        
    )
}