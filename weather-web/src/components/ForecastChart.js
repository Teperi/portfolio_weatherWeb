import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const legendOpts = {
  display: true,
  position: 'top',
  fullWidth: true,
  labels: {
    fontColor: '#f1f1f1'
  }
};

export default class ForecastChart extends Component {
  constructor(props) {
    super(props);
    console.log('데이터 확인', this.props);
    this.state = {
      data: {
        datasets: [
          {
            type: 'line',
            label: '기온',
            data: this.props.forecast.map(obj => {
              return obj.temp;
            }),
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
            data: this.props.forecast.map(obj => {
              return obj.rain;
            }),
            fill: false,
            backgroundColor: '#457AD1',
            borderColor: '#457AD1',
            hoverBackgroundColor: '#457AD1',
            hoverBorderColor: '#457AD1',
            yAxisID: 'y-axis-2',
            datalabels: {
              display: true,
              align: 'top',
              anchor: 'end',
              backgroundColor: '#457AD1',
              borderColor: '#457AD1',
              borderRadius: 4,
              borderWidth: 2,
              color: '#f1f1f1'
            }
          }
        ]
      },
      options: {
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
              labels: this.props.forecast.map(obj => {
                if (obj.dt_hours === 0) {
                  return `오전 12시`;
                } else if (obj.dt_hours < 12) {
                  return `오전 ${obj.dt_hours}시`;
                } else if (obj.dt_hours === 12) {
                  return `오후 ${obj.dt_hours}시`;
                } else {
                  return `오후 ${obj.dt_hours - 12}시`;
                }
              })
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
      }
    };
  }
  render() {
    const state = this.state;
    return (
      <div className='forecast_chart'>
        <h2 style={{ color: '#f1f1f1', textAlign: 'center' }}>다음 24시간 기온 및 강수량</h2>
        <Bar data={state.data} options={state.options} legend={legendOpts} />
      </div>
    );
  }
}
