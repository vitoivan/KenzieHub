import { Switch, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Singup from '../pages/singup';
import Settings from '../pages/settings';
import AddSomething from '../pages/addSomething'
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';


const Routes = ({ auth, setAuth, setUser, user, setError, error }) => {

const location = useLocation();
const loggedUserToken = localStorage.getItem('@KenzieHub token');
const loggedUser = JSON.parse(localStorage.getItem('@KenzieHub user'));
if(loggedUserToken && !!user === false){
  axios({
    method:'get',
    url: `https://kenziehub.me/users/${loggedUser.id}`,
  }).then( response => {
    setUser(response.data);
    setAuth(true);
  }).catch(e => {
    console.log(e.message)
    setError({state: true, msg: 'An error ocurred'})
  })
}

return(
<AnimatePresence exitBeforeEnter>
  <Switch location={location} key={location.pathname}>
    <Route exact path='/'>
      <Home auth={auth} />
    </Route>
    <Route exact path='/login'>
      <Login auth={auth} setAuth={setAuth} setUser={setUser} setError={setError} error={error} />
    </Route>
    <Route exact path='/profile'>
      <Profile auth={auth} setAuth={setAuth} setUser={setUser} user={user} />
    </Route>
    <Route exact path='/singup'>
      <Singup auth={auth}/>
    </Route>
    <Route exact path='/profile/config'>
      <Settings auth={auth} user={user} setUser={setUser} />
    </Route>
    <Route exact path='/profile/add'>
      <AddSomething auth={auth} user={user} setUser={setUser}/>
    </Route>
  </Switch>
</AnimatePresence>

  )
}
export default Routes;
