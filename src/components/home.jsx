
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
        return ( 
         <div>
                <nav>
                <h1>Telefonlarning Texnik Xususiyatlari</h1>
                </nav>

                <div className='brands'>
                  <ul>
                    <li>
                        <Link to="/apple" className='lee'>Apple</Link>
                    </li>
                 </ul>
                </div>

                <div className='brands'>
                  <ul>
                    <li>
                        <Link to="/samsung" className='lee'>Samsung</Link>
                    </li>
                 </ul>
                </div>

                <div className='brands'>
                  <ul>
                    <li>
                        <Link to="/redmi" className='lee'>Redmi</Link>
                    </li>
                 </ul>
                </div>

                <div className='brands'>
                  <ul>
                    <li>
                        <Link to="/vivo" className='lee'>Vivo</Link>
                    </li>
                 </ul>
                </div>

         </div>
         );
}
 
export default Home;