import React from 'react';
import Home from './pages/Home';
import DpNav from './DpNav';
/* import TableData from './TableData'; */

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
