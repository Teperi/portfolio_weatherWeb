import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const data = {
  datasets: [
    {
      type: 'line',
      label: '기온',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#f8bc25',
      backgroundColor: '#f8bc25',
      pointBorderColor: '#f8bc25',
      pointBackgroundColor: '#f8bc25',
      pointHoverBackgroundColor: '#f8bc25',
      pointHoverBorderColor: '#f8bc25',
      yAxisID: 'y-axis-1',
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        backgroundColor: '#f8bc25',
        borderColor: '#f8bc25',
        borderRadius: 4,
        borderWidth: 2,
        color: '#333'
      }
    },
    {
      type: 'bar',
      label: '강수량',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
      yAxisID: 'y-axis-2'
    }
  ]
};

const options = {
  responsive: true,

  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        ticks: {
          fontColor: '#f1f1f1',
          fontSize: '16'
        },
        gridLines: {
          display: false
        },
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        ticks: {
          fontColor: '#f1f1f1',
          fontSize: '16'
        },
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        scaleLabel: {
          display: true,
          fontColor: '#f1f1f1',
          fontSize: 16,
          labelString: '기온'
        }
      },
      {
        display: false,
        id: 'y-axis-2'
      }
    ]
  }
};

const legendOpts = {
  display: true,
  position: 'top',
  fullWidth: true,
  labels: {
    fontColor: '#f1f1f1'
  }
};

export default class ForecastChart extends Component {
  render() {
    return (
      <div>
        <h2>Mixed data Example</h2>
        <Bar data={data} options={options} legend={legendOpts} />
      </div>
    );
  }
}
