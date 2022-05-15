import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartFilters } from 'src/app/models/date-filter.model';
import { ChartDto } from 'src/app/models/chartDto.model';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag: boolean = false;

  chartOptions: Highcharts.Options | undefined;

  chartDetails: ChartDto[] = [];

  chartFilters = new ChartFilters(
    new Date(),
    new Date(),
  ) 
  
  constructor(
    private readonly chartService: ChartService,
  ) { }

  ngOnInit(): void {
    this.loadChartDetails();
  }

  private loadChartDetails() {
    this.chartService
      .getChartDetails(this.chartFilters)
      .subscribe(response => {
        this.chartDetails = response;
        this.buildChartOptions();
      });
  }

  private buildChartOptions() {
    this.chartOptions = {   
      chart: {
         type: 'spline',
         zoomType: 'xy',
      },
      title: {
         text: 'Ouverture',
      },
      xAxis: {
        categories: this.chartDetails.map(c => c.eventDate.toString()),
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
          data: this.chartDetails.map(c => c.temperature),
          tooltip: {
            valueSuffix:" °C",
          },
        },
        {
          name: 'Pourcentage d\'ouverture',
          type: 'line',
          yAxis: 1,
          data: this.chartDetails.map(c => c.percentage),
          tooltip: {
            valueSuffix:" %",
          },
       },
      ]
   };
  }
}
