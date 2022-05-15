import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../constants/api-routes.constants';
import { AlertDto } from '../models/alertDto.model';

@Injectable({
  providedIn: 'root'
})
export class AlertRest {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getAlertDetails = () =>
    this.httpClient.get<AlertDto>(
      apiRoutes.alert,
    );
}
