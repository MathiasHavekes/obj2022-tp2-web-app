import { Injectable } from '@angular/core';
import { ChartRest } from 'src/app/services/chart.rest';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  getChartDetails = this.chartRest.getChartDetails;

  constructor(
    private readonly chartRest: ChartRest,
  ) { }
}
