import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    console.log("coaster height " + this.props.height)
    // const height = this.props.height
    this.state = {
      chartData: {
        // labels: ['Coaster,'],
        datasets: [
          {
            label: ['Height in feet'],
            // data: [height, 1],
            data: [100, 1],
            backgroundColor: [
              'rgba(47,124,50)',
            ]
          }
        ]
      }
    }
  }
  // componentDidMount() {
  //   this.setState({height: this.props.height});
  // }

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