import Hero from './Hero';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const MovieView = () => {
   const { id } = useParams();
   
   const [movieDetails, setMovieDetails] = useState({});

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const options = {
         method: 'GET',
         headers: {
           accept: 'application/json',
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY4YTZmYzk4OGMwMGYzNzNjNmE2ZmU0NDhkZmNhZSIsInN1YiI6IjY1MDRmNGVjMzczYWMyMDBhY2Q1YTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4Ij4SnA99006RBmzHg3fCH7J_SOVaGNvFZVLrY1Gw4'
         }
       };
       fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
         .then(response => response.json())
         .then(data => {
            setMovieDetails(data);
            setIsLoading(false);
         })
         .catch(err => console.error(err));
   }, [id])

   let keyList = Object.keys(movieDetails).map((elem, i) => {
      if (!(typeof(movieDetails[elem]) === 'object')) {
         return <p className='detail_line d-inline-block w-25 text-danger' key={i}>{elem}:</p>
      }
   })
   let valueList = Object.values(movieDetails).map((elem, i) => {
      if (!(typeof(elem) === 'object')) {
         return <p className='detail_line d-inline-block w-25 text-info' key={i}>{elem}</p>
      }
   })

   const renderMovieDetails = () => {
      if (isLoading){
         return <Hero text='Loading...' />
      }else {
         let posterpath;
         if (movieDetails.poster_path) {
            posterpath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
         }else {
            posterpath = 'https://drive.google.com/uc?id=12qQiJwfTFE6sPPA1UD9SmXOlRxd3DRTg';
         }
         const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
         return (
            <>
               <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
               <div className='container my-5'>
                  <div className='row'>
                     <div className='col-md-3'>
                        <img src={posterpath} alt={`Poster of ${movieDetails.original_title}`} className='img-fluid shadow rounded'/>
                     </div>
                     <div className='col-md-9'>
                        <h2>{movieDetails.original_title}</h2>
                        <p>{movieDetails.overview}</p>
                     </div>
                  </div>
               </div>
            </>
         )
      }
   }

   return (
      <>
         {renderMovieDetails()}

         <hr className='w-100 d-block border border-bottom border-2 border-secondary mb-2'/>
         <hr className='w-100 d-block border border-bottom border-2 border-secondary mb-2'/>
         <hr className='w-100 d-block border border-bottom border-2 border-secondary mb-2'/>

         <div className='d-flex align-items-start'>
            <article className='d-flex flex-column'>
               {keyList}
            </article>
            <article className='d-flex flex-column'>
               {valueList}
            </article>
         </div>
      </>
   )
}

export default MovieView;