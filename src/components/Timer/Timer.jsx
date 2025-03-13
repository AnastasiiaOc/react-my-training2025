import { useState, useEffect } from "react";


export default function Timer (){
    const [date, setDate] = useState(new Date());
    return (
        <div>
          <b>{date.toLocaleTimeString()}</b>
        </div>
      );
}
