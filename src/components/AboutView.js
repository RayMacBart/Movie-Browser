import Hero from './Hero';

const AboutView = () => {
   return (
      <>
         <Hero text='Why we are here...'/>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-8 offset-lg-4 my-5'>
                  <p className='lead'>Hello this is another text!</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default AboutView;