import './App.css';
import React, { useState, useEffect } from 'react'
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase';

function App() {

  const [currentUser,setcurrentUser] = useState(null);
  const [renderController] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setcurrentUser({
            id:snapShot.id,
            ...snapShot.data()}
            );
        })
      }
      setcurrentUser(userAuth);   
      return () => unsubscribeFromAuth();
    })
  },[renderController])

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
