import React from 'react';

function Navigation() {  
  return <div id="navigation">
        <ul class="navigation-top">
          <li id="aboutus"><a text="About Us" href="/">About Us</a></li>
          <li id="development"><a text="Development" href="/development">Development</a></li>
          <li id="consulting"><a text="Consulting" href="/consulting">Consulting</a></li>
          <li id="coaching"><a text="Coaching" href="/coaching">Coaching</a></li>
        </ul>
      </div>;
}

export default Navigation;
