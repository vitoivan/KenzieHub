import { Switch, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Singup from '../pages/singup';
import Settings from '../pages/settings';
import AddSomething from '../pages/addSomething'

import { AnimatePresence } from 'framer-motion';


const Routes = () => {

  const location = useLocation();

  return(
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/singup'>
          <Singup />
        </Route>
        <Route exact path='/profile/config'>
          <Settings />
        </Route>
        <Route exact path='/profile/add'>
          <AddSomething />
        </Route>
    </Switch>
    </AnimatePresence>
  
  )
}
export default Routes;
