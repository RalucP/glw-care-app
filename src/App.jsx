import { Routes, Route } from 'react-router-dom'
import MainContainer from './routes/MainContainer'
import Home from './routes/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<div>Shop page</div>} />
        <Route path='sign-in' element={<div>Sign in page</div>} />
        <Route path='contact' element={<div>Contact page</div>} />
      </Route>
    </Routes> 
  )
}

export default App;
