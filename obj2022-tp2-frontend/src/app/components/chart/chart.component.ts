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

  updateFlag = false;

  startMinDate = new Date(2022, 0, 1);
  startMaxDate = new Date();

  endMinDate = new Date();
  endMaxDate = new Date(2022, 12, 31);

  chartOptions: Highcharts.Options | undefined;

  chartDetails: ChartDto[] = [];

  chartFilters = new ChartFilters(
    this.startMinDate,
    this.endMaxDate,
  ) 
  
  constructor(
    private readonly chartService: ChartService,
  ) { }

  ngOnInit(): void {
    this.loadChartDetails();
  }

  setNewStartDate(newStartDate: any) {
    this.chartFilters.start = newStartDate.value;
    this.loadChartDetails();
  }

  setNewEndtDate(newEndDate: any) {
    this.chartFilters.end = newEndDate.value;
    this.loadChartDetails();
  }

  private loadChartDetails() {
    this.chartService
      .getChartDetails(this.chartFilters)
      .subscribe(response => {
        this.chartDetails = response;
        this.buildChartOptions();
      });

    this.updateFlag = true;
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
            text: 'Température °C',
          },
        },
        {
          title: {
            text: 'Pourcentage d\'ouverture %',
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
        valueSuffix:" °C",
      },
      series: [
        {
          name: 'Température',
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
      ],
   };
  }
}
