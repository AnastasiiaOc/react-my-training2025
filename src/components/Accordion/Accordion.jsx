import { useState } from "react";
import css from "../Accordion/Accordion.module.css"

export default function Accordion({items}){

    const [myIndex, setMyIndex] = useState("-1")
    const changeIndex = (index) => {
        setMyIndex(index === myIndex ? -1 : index )
    }
    return(<div className={css.accordionContainer}>
            <p className={css.accordionTitle}>Accordion</p>
            {items.map((item, index) => (
                <div className = {css.item}key={index}>
                    <button className={css.button}type="button" onClick={() => changeIndex(index)}>{item.title}</button>
                    { index === myIndex && (
                         <p className={css.content}>{item.content}</p>
                    )  
                    }
                    
                </div>
            ))}
        </div>
    );
}

