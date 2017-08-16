import React from 'react';
import Routes from '../routes/';

class App extends React.Component {
   render() {
      return (
        <div>
          <div className="dashboard container">
            <div className="row">
              <p>This is dashboard</p>
              <Routes />
            </div>
          </div>
        </div>
      );
   }
}

export default App;
