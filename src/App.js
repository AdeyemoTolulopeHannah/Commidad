import React from 'react'
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer/Footer'
import Navbar from './components/Nav/nav'
import Landing from './pages/Landing/landing'
import Shop from './pages/shop/Shop'
import Sign from './pages/signin/SignIn'


 const App = () => {
  return (
    <div>
     
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/shop'>
          <Shop/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  )
}

 export default App