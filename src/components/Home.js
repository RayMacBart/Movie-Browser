import Hero from './Hero';

const Home = ({num}) => {

   return (
      <>
         <Hero text='Welcome to React 201!'/>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-8 offset-lg-4 my-5'>
                  <p className='lead'>Hello this is some text! Number: {num}</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;