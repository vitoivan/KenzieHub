import Routes from './routes/';
import Background from './components/BG';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Background />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        />
      <Routes auth={auth} setAuth={setAuth} setUser={setUser} user={user} />
    </div>
  );
}
export default App;
