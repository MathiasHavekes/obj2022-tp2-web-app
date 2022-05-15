import { Injectable } from '@angular/core';
import { AlertRest } from 'src/app/services/alert.rest';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  getAlertDetails = this.alertRest.getAlertDetails;

  constructor(
    private readonly alertRest: AlertRest,
  ) { }
}
