import React from 'react';
// import Navbar from './Navbar';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import Location from './Location';
// import Loan from './Loan';
import Cards from './Cards';
// import CompanyIntro from './CompanyIntro';
import LoanCalculator from './Loan-Calculator';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Main />
      <Cards />
      {/* <CompanyIntro /> */}
      {/* <Loan /> */}
      <LoanCalculator/>
      <Location />
      <Features />
      <Footer />
    </div>
  )
}

export default App