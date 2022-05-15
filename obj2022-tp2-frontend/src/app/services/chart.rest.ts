import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../constants/api-routes.constants';
import { ChartFilters } from '../models/date-filter.model';
import { ChartDto } from '../models/chartDto.model';

@Injectable({
  providedIn: 'root'
})
export class ChartRest {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getChartDetails = (dateRange: ChartFilters) =>
    this.httpClient.get<ChartDto[]>(
      apiRoutes.chart,
      {
        params: dateRange.topParam(),
      }
    );
}
