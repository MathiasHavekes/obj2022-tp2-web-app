import { Component, OnInit } from '@angular/core';
import { AlertDto } from 'src/app/models/alertDto.model';
import { AlertService } from './alert.service';

const acceptedRange = 15;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertDetails: AlertDto | undefined;
  
  isTooMuchOpen = false;
  isNotEnoughOpen = false;

  constructor(
    private readonly alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.alertService
      .getAlertDetails()
      .subscribe(result => {
        this.alertDetails = result;
        this.checkIfAlertNeeded();
      });
  }

  private checkIfAlertNeeded() {
    if(!this.alertDetails) return;

    const actual = this.alertDetails.actualPercentage;
    const expected = this.alertDetails.expectedPercentage;

    if(actual < (expected - acceptedRange)) {
      this.isNotEnoughOpen = true;
    } else if(actual > (expected - acceptedRange)) {
      this.isNotEnoughOpen = true;
    }
  }
}
