import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Dashboard from '../containers/Dashborad.js';
import AddNewItem from '../containers/AddNewItem.js';
import Summary from '../containers/Summary.js';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-new-item">Add New Item</Link></li>
        <li><Link to="/summary">Summary</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Dashboard}/>
      <Route path="/add-new-item" component={AddNewItem}/>
      <Route path="/summary" component={Summary}/>
    </div>
  </Router>
)

export default Routes
