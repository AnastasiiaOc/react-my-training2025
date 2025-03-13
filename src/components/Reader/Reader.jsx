import { useState } from "react";
import css from "../Reader/Reader.module.css"

// {   id: 1, 
//     topic: 'Web Technologies',
//     text: 'Web technologies encompass a wide range of tools, …nd content of a web page using elements and tags.'}

export default function Reader({items}){
    const [selectedIndex, setSelectedIndex] = useState(0)

    // const handleNext = () =>{
    //     setSelectedIndex((selectedIndex < items.length -1) ? selectedIndex + 1 : selectedIndex)
    // }
    // const handlePrev = () =>{
    //     console.log(items.length -1)
    //     setSelectedIndex ((selectedIndex >= 1) ? selectedIndex - 1 : selectedIndex )    
    // }

    const handleNext =() =>{
        setSelectedIndex(selectedIndex + 1);
    }

    const handlePrev =() =>{
        setSelectedIndex(selectedIndex - 1);
    }

    const isFirst = selectedIndex === 0;
    const isLast = selectedIndex === items.length -1;
    const currentArticle = items[selectedIndex] //check it up it gives us current index of an article)
    console.log(currentArticle)
    return (
     
        <div className={css.container}>
             <h2>Reader</h2>
             <div>  
            <button type ="button"onClick = {handlePrev} disabled = {isFirst}>Prev</button>
             <button type ="button" onClick ={handleNext} disabled = {isLast}>Next</button>
             </div>
             <p>{selectedIndex + 1}/{items.length}</p>
             <article>
                <h3>{currentArticle.topic}</h3>
                <p> {currentArticle.text}</p>
             </article>
           
        </div>
       
    )
}