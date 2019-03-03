import React, { Component } from 'react';
import './App.css';
import { renderToStaticMarkup } from 'react-dom/server';

import Home from './home/main'
import Header from './site/header'
import Footer from './site/footer'
import imageSplitter from './img-split/imageSplitter'
class SvgBackground extends React.Component {
  render() {
    return (
      <svg  width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
   
   <pattern id="pattern-cubes" x="0" y="126" patternUnits="userSpaceOnUse" width="126" height="200" viewBox="0 0 10 16"> 
   
     <g id="cube">
       <path fill='#7bd4d6' className="left-shade" d="M0 0l5 3v5l-5 -3z" />
       <path fill='#8b8897' d="M10 0l-5 3v5l5 -3" />
     </g>
     <use x="5" y="8" xlinkHref="#cube" />
     <use x="-5" y="8" xlinkHref="#cube" />
   
   </pattern>
 
   <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-cubes)" />
  
</svg>
      


      
    );
  }
}


class App extends Component {
  render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
      <div className="App hg" style={{background: dataUri}}>
      <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
