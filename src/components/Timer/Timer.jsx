import { useState, useEffect } from "react";

import css from "../Timer/Timer.module.css"

export default function Timer (){
    const [date, setDate] = useState(new Date());

    useEffect(() =>{
     
    let  timerId =  setInterval(() =>{
        setDate(new Date());
      }, 1000)
    return () => {
      clearInterval(timerId)
    }
     },[])
    return (
        <div className={css.timer}>
          <b>{date.toLocaleTimeString()}</b>
        </div>
      );
}
