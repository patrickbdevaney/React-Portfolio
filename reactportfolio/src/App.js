import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
/* import Footer from "./components/pages/Footer"; */

  
function App() {

  document.body.style.backgroundColor = '#d8e1ff';
  
  return (
    <div id='app'>
      
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Navigation />
      <Switch>
      <Route path='/' exact component={ About }></Route> 
      <Route path='/portfolio' component={ Portfolio } ></Route>
      <Route path='/contact' component={ Contact }></Route>
      <Route path='/resume'component={ Resume }></Route>
      <Route component = { About }></Route>
      </Switch>
   
      
      </BrowserRouter>
     {/*  <Footer>   </Footer> */}
    </div>
  );
}

export default App;




