import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag: boolean = false;

  chartOptions: Highcharts.Options | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {   
      chart: {
         type: 'spline',
         zoomType: 'xy',
      },
      title: {
         text: 'Ouverture',
      },
      xAxis: {
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      },
      yAxis: [
        {          
          title:{
            text: 'Temperature °C',
          },
        },
        {
          title: {
            text: 'Pourcentage d\'ouverture %',
          },
          opposite: true,
        }
      ],
      tooltip: {
        shared: true,
        valueSuffix:" °C",
      },
      series: [
        {
          name: 'Temperature',
          type: 'line',
          yAxis: 0,
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix:" °C",
          },
        },
        {
          name: 'Pourcentage d\'ouverture',
          type: 'line',
          yAxis: 1,
          data: [10, 30, 40, 30, 20, 100, 90],
          tooltip: {
            valueSuffix:" %",
          },
       },
      ]
   };
  }
}
