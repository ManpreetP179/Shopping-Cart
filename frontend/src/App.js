import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
