import { useState, useEffect } from "react";
import css from "../Reader/Reader.module.css"

// {   id: 1, 
//     topic: 'Web Technologies',
//     text: 'Web technologies encompass a wide range of tools, …nd content of a web page using elements and tags.'}

export default function Reader({items}){
    // const [selectedIndex, setSelectedIndex] = useState(0)
       // function of initialisation of state to avoid dyscronization of state because of local storage we do like this: because we need to read local storage before ounting
    const [selectedIndex, setSelectedIndex] = useState(() =>{
        const savedIndex = localStorage.getItem('reader-index');

        if(savedIndex !== null){  // in case of parsing problems we need this
            return JSON.parse(savedIndex); // we need to parse to get a number
        }
        return 0;
    })
 

    // const handleNext = () =>{
    //     setSelectedIndex((selectedIndex < items.length -1) ? selectedIndex + 1 : selectedIndex)
    // }
    // const handlePrev = () =>{
    //     console.log(items.length -1)
    //     setSelectedIndex ((selectedIndex >= 1) ? selectedIndex - 1 : selectedIndex )    
    // }

    useEffect (() =>{
        localStorage.setItem('reader-index', JSON.stringify(selectedIndex))},
         [selectedIndex]);


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
            <header className ={css.header}>
            <h2 className = {css.mainHeader}>Reader</h2>

<div className ={css.readerButton}>  
<button className={css.buttonItself}  type ="button"onClick = {handlePrev} disabled = {isFirst}>Prev</button>
<button className={css.buttonItself}  type ="button" onClick ={handleNext} disabled = {isLast}>Next</button>
</div>

<p className={css.pages}>{selectedIndex + 1}/{items.length}</p>
            </header>
             

             <article className ={css.readerArticle}>
                <h3 className={css.readerHeader}>{currentArticle.topic}</h3>
                <p className ={css.readerParagraph}> {currentArticle.text}</p>
             </article>
           
        </div>
       
    )
}