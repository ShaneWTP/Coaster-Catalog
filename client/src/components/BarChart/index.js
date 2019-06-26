import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['test'],
        datasets: [
          {
            label: ['height'],
            data: [45, 1],
            backgroundColor: ['rgba(46,125,50,0.1)']

          }
        ]
      }
    }
  }
  render (){
    return(
      <div className="chart">
        <Bar
          data={this.state.Chartdata}
          // width={100}
          // height={100}
          options={{ 
            maintainAspectRatio: false 
          }}
        />
      </div>  
    )
  }
}

export default BarChart;