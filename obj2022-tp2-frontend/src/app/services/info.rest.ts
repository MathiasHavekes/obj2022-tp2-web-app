import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../constants/api-routes.constants';
import { InfoDto } from '../models/infoDto.model';

@Injectable({
  providedIn: 'root'
})
export class InfoRest {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getInfoDetails = () =>
    this.httpClient.get<InfoDto>(
      apiRoutes.info,
    );
}
