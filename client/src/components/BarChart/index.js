import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      chartData: {
        // labels: ['Coaster,'],
        datasets: [
          {
            label: ['Height in feet'],
            // data: [height, 1],
            data: [300, 1],
            backgroundColor: [
              'rgba(47,124,50)',
            ]
          }
        ]
      }
    }
  }
  componentDidMount() {
    this.setState({ hasLoaded: true })
  }
  componentDidUpdate() {
    console.log(this.props.coasterHeight)
    var coastHeight = this.props.coasterHeight
    if (this.state.hasLoaded && coastHeight !== undefined) {

      const updatedChartData = {
        ...this.state.chartData
      }
      updatedChartData.datasets.data = [coastHeight, 1]
      // updatedChartData.hasLoaded = false
      console.log(updatedChartData.datasets.data)
      this.setState({ chartData: updatedChartData, hasLoaded: false }, () => { console.log(this.state) })

    }
  }
  
  render() {
    console.log(this.state.chartData)
    return (
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