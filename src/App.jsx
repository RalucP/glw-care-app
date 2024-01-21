import { Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';

import Spinner from './components/spinner/Spinner';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

const MainContainer = lazy(() => import('./routes/main-container/MainContainer'));
const Home = lazy(() => import('./routes/home/Home'));
const Authentication = lazy(() => import('./routes/authentication/Authentication'));
const Shop = lazy(() => import('./routes/shop/Shop'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='authentication' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes> 
    </Suspense>
  )
}

export default App;