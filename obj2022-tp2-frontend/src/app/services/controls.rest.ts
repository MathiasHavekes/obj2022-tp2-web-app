import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../constants/api-routes.constants';
import { ControlDto } from '../models/controlDto.model';

@Injectable({
  providedIn: 'root'
})
export class ControlsRest {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  postControls = (controls: ControlDto) =>
    this.httpClient.post<ControlDto>(
      apiRoutes.controls,
      controls,
    )
}
