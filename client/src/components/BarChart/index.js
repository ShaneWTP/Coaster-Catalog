import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        // labels: ['Coaster,'],
        datasets: [
          {
            label: ['Height in feet'],
            data: [45, 1],
            // data: [{this.state.coaster.height}, 1],
            backgroundColor: [
              'rgba(47,124,50)',
            ]
            

          }
        ]
      }
    }
  }
  render (){
    return(
      <div className="bar-chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={400}
          options={{ 
            maintainAspectRatio: false,
            animation: {
              duration: 4000
            }
          }}
        />
      </div>  
    )
  }
}

export default BarChart;