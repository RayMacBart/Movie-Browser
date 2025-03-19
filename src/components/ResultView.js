import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const ResultView = ( { keyword, results } ) => {

   const [resultList, setResultList] = useState([]);

   useEffect(() => {
      let newList = [];
      results.forEach(obj => {
         Object.keys(obj).forEach(key => {
            if (key.search(keyword) >= 0) {
               newList.push(
                  [
                  key.slice(0, key.search(keyword)), 
                  keyword, 
                  key.slice(key.search(keyword)+keyword.length)+': '+String(obj[key]),
                  obj.id,
                  obj.original_title
                  ]
               );
            }
            if (typeof(obj[key]) === 'string') {
               if (obj[key].search(keyword) >= 0) {
                  newList.push(
                     [
                     key+': '+obj[key].slice(0, obj[key].search(keyword)), 
                     keyword,
                     obj[key].slice(obj[key].search(keyword)+keyword.length),
                     obj.id,
                     obj.original_title
                     ]
                  );
               } 
            }
         })
      })
      setResultList(newList);
      console.log('RL:',resultList);
   }, [keyword])

   const resultsToRender = resultList.map((elem, i) => {
      if (resultList) {
         const detailUrl = '/movies/'+String(elem[3]);
         return (
            <>
               <span>in</span> 
               <Link to={detailUrl} 
                     style={{fontSize: 20, 
                              fontWeight: 500, 
                              fontStyle: 'italic', 
                              color: 'darkgreen'}}>
                  {elem[4]}
               </Link>
               <p key={i}>
                  {elem[0]}
                  <b style={{textDecoration: 'underline', color: 'darkred'}}>{elem[1]}</b>
                  {elem[2]}
               </p>
            </>
         )
      }
   })

   return (
      <>
         <div id='result-container'>
            {resultsToRender}
         </div>
      </>
   )
}

export default ResultView;