import React, { Component } from 'react';
import logo from './logo.svg';
import Member from './components/member';
import img1 from './images/yahya.JPG';
import img2 from './images/amine.JPG';
import img3 from './images/arsslen.JPG';
import img4 from './images/sameh.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
     <center>
        <h1>Notre équipe</h1>
        <Member name="yahya" role="web" image={img1} />
        <Member name="amine" role="web" image={img2} />
        <Member name="arsslen" role="web" image={img3} />
        <Member name="semah" role="web" image={img4} />
     </center>                                
    );
  }
}

export default App;
