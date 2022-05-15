import { Injectable } from '@angular/core';
import { InfoRest } from 'src/app/services/info.rest';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  getInfoDetails = this.infoRest.getInfoDetails;

  constructor(
    private readonly infoRest: InfoRest,
  ) { }
}
