import './App.css';
import React, { useState, useEffect } from 'react'
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase';

function App() {

  const [currentUser,setcurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setcurrentUser(user);
      console.log(user);
      return () => unsubscribeFromAuth();
    })
  },[currentUser])

  return (
    <div>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
