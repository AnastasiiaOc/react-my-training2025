/**
 * - Додати обратник keydown при монтуванні
 * - Закривати по Escape
 * - Розібрати чому реєструється два слухача (Strict Mode)
 * - Очистити слухач при розмонтуванні
 */

import css from "../Sidebar/Sidebar.module.css"
import { useState, useEffect } from "react";



export default function Sidebar({onClose}) {

    useEffect (() =>{
        const escPress = (event) => {

            if (event.key === 'Escape') {
                onClose();
            }
        };
            document.addEventListener('keydown', escPress);

            return () => {
              document.removeEventListener('keydown', escPress);
            };
         
        
    },[onClose])


   
  

   return (
    <div className={css.wrapper}>
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
      <p className={css.text}>
    To be able to close by pressing Escape we need UseEffect and AddEventListener:
      `useEffect (() = &#123; 
        const pressEscape = (event) => &#123; <br />
    if (event.key === 'Escape') &#123;<br />
    onClose();
    &#123; &#123;;
    document.addEventListener('keydown', pressEscape);<br />
    return () => &#123;<br />
    document.removeEventListener('keydown', pressEscape);<br />
     &#123;;    
    &#123;,[onClose])`
      </p>
    </div>
  ) ; 

}