import { BrowserRouter, Routes as RRDRoutes, Route} from 'react-router-dom';
import Home from '../views/Home';
import { Users } from '../views/Users';
import { Error} from '../views/Error';

export function Routes() {

    return(
        <BrowserRouter basename='/'>
          <RRDRoutes>
            <Route path='/' element= { <Home /> } />
            <Route path='/users' element= { <Users />} />
            <Route path='*' element= { <Error />} />
          </RRDRoutes>
        </BrowserRouter>
    )
};