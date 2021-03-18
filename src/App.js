
 import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Login from './components/Login'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Destination from './components/Destination'
import Error from './components/Error'

function App() {
  return (
  <Router>
    <Header/>
      <Switch>
      <Route exact path="/">
     <Showcase/>
     <Destination/>
     </Route >

     <Route path="/login">
      <Login/>
     </Route>

     <Route path="/signup">
       <SignUp/>
     </Route>
      
      <Route path="*">
        <Error/>
      </Route>
      </Switch>
    
     <Footer/>
  </Router>
  );
}

export default App;
