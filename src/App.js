import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import ResultView from './components/ResultView';
import MovieView from './components/MovieView';
import Page404 from './components/Page404';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'; 
// was made automatically! But not seems to be necessary!

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [number, setNumber] = useState(0);
  // const [resultPath, setResultPath] = ('');

  useEffect(() => {
    if (searchText) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY4YTZmYzk4OGMwMGYzNzNjNmE2ZmU0NDhkZmNhZSIsInN1YiI6IjY1MDRmNGVjMzczYWMyMDBhY2Q1YTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4Ij4SnA99006RBmzHg3fCH7J_SOVaGNvFZVLrY1Gw4'
        }
      };
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        })
        .catch(err => console.error(err));
    }
  }, [searchText]);
    

  return (
    <div>
      <Navbar searchText={searchText} 
              setSearchText={setSearchText} 
              number={number} 
              setNumber={setNumber}
              // resultPath={resultPath}
              // setResultPath={setResultPath}
              />
        <Switch>
          <Route path='/' exact>
            <Home num={number} />
          </Route>
          <Route path='/about' component={AboutView} />
          <Route path='/search'>
            <SearchView keyword={searchText} 
                        results={searchResults} 
                        setResults={setSearchResults}
                        />
          </Route>
          <Route path='/movies/:id' component={MovieView} />
          <Route path='/results'>
            <ResultView keyword={searchText} results={searchResults} />
          </Route>
          <Route path='/:falseUrl' component={Page404} />
          {/* <Route path={resultPath}> */}
          
        </Switch>
    </div>
  );
}

export default App;
