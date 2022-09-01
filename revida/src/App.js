import React from "react";
import Logo from './Logo/component';
import Navigation from './Navigation/component';
import About from "./About/component";
import Development from "./Development/component";
import Consulting from "./Consulting/component";
import Coaching from "./Coaching/component";

function App() {
    var components = {
        About, Development, Consulting, Coaching
    };

    var viewName = 'About';
    if (window.location.pathname == '/development') {
        viewName = 'Development';
    }
    else if (window.location.pathname == '/consulting') {
        viewName = 'Consulting';
    }
    else if (window.location.pathname == '/coaching') {
        viewName = 'Coaching';
    }
    var component = components[viewName];

    return <React.Fragment>
               <Logo />
               <Navigation />                          
               {React.createElement(component, {})}
           </React.Fragment>;
  };
  
  export default App;