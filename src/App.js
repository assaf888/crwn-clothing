import './App.css';
import React, { useState, useEffect } from 'react'
import HomePage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { setCurrentUser } from './redux/user/user.actions'

import { auth, createUserProfileDocument } from './firebase/firebase';

function App() {
  
  // const [currentUser, set_currentUser] = useState(null);
  const { currentUser } = useSelector(state => state.user)

  const [renderController] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }
          ))
        })
      }
      dispatch(setCurrentUser(userAuth));
      return () => unsubscribeFromAuth();
    })
  }, [renderController])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

export default App;