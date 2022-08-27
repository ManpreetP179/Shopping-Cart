
import './App.css';
import React, { useState, useEffect } from 'react';
import { User } from "./requests"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
//login pages
import { SignInPage } from './components/shared/SignInPage';
import { SignUpPage } from './components/shared/SignUpPage';

//ProductPage
import MainProducts from './components/products/Products';
import NewProduct from './components/products/NewProduct';
import  ShowProduct  from './components/products/ShowProduct';



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [])
  const getCurrentUser = () => {
    return User.current().then(user => {
      console.log("---App.js---start USEREFFECT")
      console.log(user.data)
      !!user.data ? setCurrentUser(user.data.email) : setCurrentUser(undefined)
      console.log("---App.js---END USEREFFECT")
    }).catch(e =>
      console.log(e))
  }
  const onSignOut = () => { User.destroy() }
  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} onSignOut={onSignOut} />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="signin" element={<SignInPage onSignIn={getCurrentUser} />} />
        <Route path="signup" element={<SignUpPage onSignUp={getCurrentUser} />} />
        <Route path="products" element={<MainProducts />}>
          <Route path=":id" element={<ShowProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
