import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import MainContainer from './routes/main-container/MainContainer'
import Home from './routes/home/Home'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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