import { Component, OnInit } from '@angular/core';
import { AlertDto } from 'src/app/models/alertDto.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertDetails: AlertDto | undefined;

  constructor(
    private readonly alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.alertService
      .getAlertDetails()
      .subscribe(result => 
        this.alertDetails = result);
  }

}
