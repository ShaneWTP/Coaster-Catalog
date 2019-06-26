import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Speed in mph'],
        datasets: [
          {
            // label: ['Speed in mph'],
            data: [40, 20],
            // data: [{this.state.coaster.height}, 1],
            backgroundColor: [
              'rgba(47,124,50)', 
              'rgb(255, 36, 25, 0.5)',
            ]
            

          }
        ]
      }
    }
  }
  render (){
    return(
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={375}
          options={{ 
            maintainAspectRatio: false,
            circumference: Math.PI,
            rotation: Math.PI / 1 
          }}
        />
      </div>  
    )
  }
}

export default DoughnutChart;