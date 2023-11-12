import React from 'react';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Users from './components/pages/Users';
import DpNav from './components/DpNav';
import Footer from './components/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <React.Fragment>
          <DpNav />
          <Route path= "/" exact component = {Home} />
          <Route path= "/products" exact component = {Products} />
          <Route path= "/users" exact component = {Users} />
          <Footer />

    </React.Fragment>
  );
}

export default App;
