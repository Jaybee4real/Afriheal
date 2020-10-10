import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import "./index.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/main.scss";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
