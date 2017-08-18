import React from 'react';
import Chart from '../components/Chart';

class Summary extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Clothing', 'Electronics', 'Accessories', 'Home'],
        datasets:[
          {
            label:'Category',
            data:[
              150,
              225,
              212,
              110
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="summary">
        <h2>Summary</h2>
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}

export default Summary;
