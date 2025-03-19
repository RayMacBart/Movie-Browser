import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Navbar({ searchText, setSearchText, number, setNumber }) {

  const history = useHistory();

  // const goBackHome = () => {
  //   history.push('/');
  // }

  const goToSearch = () => {
    history.push('/search');
  }

  const updateSearchText = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  const increaseNumber = () => {
    console.log('been clicked!');
    setNumber(++number);
  }

  const goToResultView = () => {
    // setResultPath(searchText);
    // history.push(resultPath);
    history.push('/results');
  }

   return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <Link className="navbar-brand" to="/">Movie Browser</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/about">About</Link>
         </li>
         
         <li className="nav-item" onClick={increaseNumber}>
           <Link className="nav-link disabled" 
                 to="/" 
                 aria-disabled="true"
                >
                 Increase Number
           </Link>
         </li>
       </ul>
       <form className="d-flex" role="search">
         <input className="form-control me-2" 
                type="search" 
                placeholder="Search"
                aria-label="Search" 
                value={searchText}
                onFocus={goToSearch}
                // onBlur={goBackHome}
                onChange={updateSearchText}
                />
         <button className="btn btn-outline-success" 
                 type="button"
                 onClick={goToResultView}>Search</button>
       </form>
     </div>
   </div>
 </nav>
   )
 }

 export default Navbar;