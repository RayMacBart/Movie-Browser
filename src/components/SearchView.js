import Hero from './Hero';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const SearchView = ({ keyword, results}) => {

   const title = `You are searching for ${keyword}`;
   let [resultList, setResultList] = useState([]);
   let [resCount, setResCount] = useState(0);

   let wholeResultList = (results.map((elem, i) => {
      return <MovieCard movie={elem} key={i} />
   }));

   const getShortResults = (rL) => {
      rL = [];
      if (wholeResultList.length > 10) {
         console.log('..........');
         wholeResultList.forEach((elem, index) => {
            if (index >= wholeResultList.length-10) {
               rL.push(elem);
            }
         })
      }
      return rL;
   }

   useEffect(() => {
      setResultList(getShortResults(resultList));
      setResCount(++resCount)
      console.log('resultList:', resultList);
      // if (!wholeResultList) {
      //    const field = document.getElementsByTagName('fieldset');
      //    field.text = 'Sorry, no results found...';
      // }
      }, [keyword]);

   return (
      <>
         <Hero text={title}/>
         <section>
            <div className='d-block my-4'>
               <fieldset className='container'>
                  <div className='row'> 
                  {/* doesn't work: row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 gx-4 gy-5*/}
                     {resultList}
                  </div>
               </fieldset>
               { resultList.length===0 && <p className='mt-5 w-100 fs-4 d-block text-center'><i>...Sorry, no results found...</i></p> }
            </div>
         </section>
         
      </>
   )
}

export default SearchView;


// TMDB - API-KEY = 89f8a6fc988c00f373c6a6fe448dfcae
// example movie searchlink = 
// https://api.themoviedb.org/3/search/movie?query=Star%20Wars&include_adult=false&language=en-US&page=1