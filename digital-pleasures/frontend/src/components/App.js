import React from 'react';
import Home from './pages/Home';
import DpNav from './DpNav';
/* import Chart from './Chart'; */
function App() {
  return (
    <React.Fragment>
          <DpNav />
      	<div id="wrapper">
          <Home />
        </div>
    </React.Fragment>
  );
}

export default App;
