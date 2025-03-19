import { useParams } from 'react-router-dom';
import Hero from './Hero';

const Page404 = () => {
   const { falseUrl } = useParams();
   const errorText = '404 Error: Cannot find url "localhost:3000/'+falseUrl+'"';

   return (
      <>
         <Hero text={errorText} />
      </>
   )
}

export default Page404;