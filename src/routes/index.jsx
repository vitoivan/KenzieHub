import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Singup from '../pages/singup';
const App = () => {
  <Switch>
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

  </Switch>
}
export default App;
