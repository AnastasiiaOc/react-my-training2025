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
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import ActivityTracker from "../ActivityTracker/ActivityTracker.jsx";

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

 
    const [isTimerMounted, setIsTimerMounted] = useState(false);
    const toggleTimer = () =>{ setIsTimerMounted(!isTimerMounted)}
// =================================Article Service and Submit=============================
   const [isOpen, setIsOpen] = useState(false);

   const [articleService, setArticleService] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false)

  // Plagination:===============================================


      const [searchTerm, setSearchTerm] = useState('');
      const [page, setPage] = useState(1);
  
      const handleSearch = (topic) => {
          setSearchTerm(`${topic}/${Date.now()}`);
          setPage(1);  //when we change the topic we need do drop the page back to 1
          setArticleService([]); // When we change topic, we need to clean up the articles that occured for another topic
      };

      const handleLoadMoreClick = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (searchTerm === '') {
            return;
        }

        async function getData() {
            try {
                setError(false);// so that after error the next htpp request doen't show errors
                setIsLoading(true);
                const data = await fetchArticles(
                    searchTerm.split('/')[0],
                    page
                );
                setArticleService((prevArticles) => { //we add new page articles (loading more and the old one is not deleted)
                    return [...prevArticles, ...data];
                });
            } catch {
                setError(true);
                toast.error('Please reload there was an error!!!!');
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [page, searchTerm]);

// =================HTPP REQUEST without plagination===================
  
    //  const handleSearch = async(topic) =>{
    //   try{
    //     setError(false);
    //     setIsLoading(true);
    //     setArticleService([]);
    //     const data = await fetchArticles(topic)
    //     setArticleService(data)
    //   }
    //   catch (error){
    //     setError(true);
    //   }
    //   finally{
    //     setIsLoading(false);
    //   }
      
    //  };
// ==============================Sidebar=======================================
const openSidebar =() =>{
  setIsOpen(true)
 }
 const closeSidebar =() =>{
  setIsOpen(false)
 }
    
 
	return (
    <>
<ActivityTracker/>
<ThemeSwitcher/>
<button className ={css.timerButton} onClick ={toggleTimer}>{isTimerMounted ? "Hide Timer" : "Show Timer"}</button>
{isTimerMounted && <Timer/>}
{/* ====================================================================== */}
         <SearchForm onSearch={handleSearch}/>
      {isLoading && <p> Loading...</p>}
      {error && <b> Whoops an error occured, try to reload the page</b>}
      {articleService.length > 0 && <ArticleService requests ={articleService}/>}
      {articleService.length > 0 && !isLoading && ( //show the button only If the array is empty or nothing is loading 
                <button onClick={handleLoadMoreClick}>
                    Load more articles {page}
                </button>)}

      {/* <Button onClick={handleClick} value ={clicks}/> */}
      <Button/>
      <Accordion items ={accordionList}/>
      {/* <Modal/> */}
      <Reader items ={articles}/>
      <button className={css.sideBarButton} type="button" onClick ={openSidebar}>open sidebar</button>
      {isOpen && <Sidebar onClose ={closeSidebar}/>}


   

    </>


  )
};

export default App;



