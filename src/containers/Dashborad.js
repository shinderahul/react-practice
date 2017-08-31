import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillMount(){
    // Make a request for Data
    axios
      .get('https://raw.githubusercontent.com/shinderahul/react-practice/master/src/json/inventary.json')
      //.get('https://www.reddit.com/r/reactjs.json')
      .then(({ data })=> {
      	this.setState({
          items: data
        });
      })
      .catch((err)=> {})
  }
  render() {

    const dataItems = this.state.items.map((item) => {
      return(
        <tr key={item.id}>
          <td>{item.itemCode}</td>
          <td>{item.itemName}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.maxOrder}</td>
          <td>{item.category}</td>
          <td>{item.dateTime}</td>
        </tr>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <div className="xs-12">
            <h2>Dashboard</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Max. Order</th>
                  <th>Category</th>
                  <th>Date Time</th>
                </tr>
              </thead>
              <tbody>
                {dataItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
