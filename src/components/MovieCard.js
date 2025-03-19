import { Link } from 'react-router-dom';

const MovieCard = ( { movie }) => {
   let posterUrl;
   if (movie.poster_path) {
      posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
   }else {
      posterUrl = 'https://drive.google.com/uc?id=12qQiJwfTFE6sPPA1UD9SmXOlRxd3DRTg'
   }
   const detailUrl = `/movies/${movie.id}`;
   return (
      <div className="dcard m-4 col-lg-5 col-xl-3 col-xxl-2 border border-light rounded shadow">
         <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
         <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">Show details</Link>
         </div>
      </div>
   )
}

export default MovieCard;