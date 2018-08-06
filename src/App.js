import React from 'react';
import ResumeAPI from './api';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import CallToAction from './Components/CallToAction';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const allData = ResumeAPI.all();

  return (
    <div className="App">
      <Header data={allData.main} />
      <About data={allData.main} />
      <Resume data={allData.resume} />
      <Portfolio data={allData.portfolio} />
      <CallToAction />
      <Testimonials data={allData.testimonials} />
      <Contact data={allData.main} />
      <Footer />
    </div>
  );
};

export default App;
