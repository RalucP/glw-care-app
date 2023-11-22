import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase";
import { setCurrentUser } from './store/user/user.action';

import MainContainer from './routes/main-container/MainContainer'
import Home from './routes/home/Home'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) createUserDocumentFromAuth(user);
      
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='contact' element={<div>Contact page</div>} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes> 
  )
}

export default App;
