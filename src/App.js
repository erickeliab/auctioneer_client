import React from 'react';
import './App.css';
import TopBar from './top-bar';
import Main from './Main';
import Footer from './Footer';
import Search from './Search.js';


function App() {
  return (
    <div>
      <div classname="container" style={appstyle}>
        <center>
          < TopBar />
      </center>
  </div>


< Search />
<section style={mainstyle}>
  < Main />
</section>

< Footer />
    </div>


  );
}

var appstyle = {
  backgroundColor : 'black',
  marginTop : '0px'
}

var mainstyle = {
  backgroundColor: 'white',
  color: 'black'
}

export default App;
