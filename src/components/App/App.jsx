import { useEffect, useState } from "react";
import Button from "../Button/Button"
// import Modal from "../Modal/Modal"
import accordionList from "../Accordion/accordionList.json"
import Accordion from "../Accordion/Accordion.jsx";
import Reader from "../Reader/Reader.jsx";
import articles from "../../articles.json"
import Sidebar from "../Sidebar/Sidebar.jsx";
import css from "../App/App.module.css"
import Timer from "../Timer/Timer.jsx";
import ArticleService from "../ArticleService/ArticleService.jsx"
import SearchForm from "../SearchForm/SearchForm.jsx";
import { fetchArticles } from "../../articleService.js"

// Htpp запит робиться обо в ефектах або в якомусь колбеці
// 1. Fetch data
// 2. Save to state
// 3 state update
// 4. Component update

// Коли відбувається http запит?
//   1) Зміна терміну пошуку searchTerm (сабміт форми)
//   2) Зміна номеру групи page (Клnuік по load more)

 const App = () => {
	
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks (clicks + 1);
  // };

   const [isOpen, setIsOpen] = useState(false);

   const [articleService, setArticleService] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false)


     const openSidebar =() =>{
      setIsOpen(true)
     }
     const closeSidebar =() =>{
      setIsOpen(false)
     }



     const handleSearch = async(topic) =>{
      try{
        setError(false);
        setIsLoading(true);
        setArticleService([]);
        const data = await fetchArticles(topic)
        setArticleService(data)
      }
      catch (error){
        setError(true);
      }
      finally{
        setIsLoading(false);
      }
      
     };

    
 
	return (
    <>
         <SearchForm onSearch={handleSearch}/>
      {isLoading && <p> Loading...</p>}
      {error && <b> Whoops an error occured, try to reload the page</b>}
      {articleService.length > 0 && <ArticleService requests ={articleService}/>}

      {/* <Button onClick={handleClick} value ={clicks}/> */}
      <Button/>
      <Accordion items ={accordionList}/>
      {/* <Modal/> */}
      <Reader items ={articles}/>
      <button className={css.sideBarButton} type="button" onClick ={openSidebar}>open sidebar</button>
      {isOpen && <Sidebar onClose ={closeSidebar}/>}
   



      <Timer/>

    </>


  )
};

export default App;



