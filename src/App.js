import React, { Component } from 'react';
import ResumeAPI from './api';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import CallToAction from './Components/CallToAction';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const allData = ResumeAPI.all();
console.log(allData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <CallToAction />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
