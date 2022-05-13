import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import { ControlsComponent } from './components/controls/controls.component';
import { InfoComponent } from './components/info/info.component';

import { HighchartsChartModule } from 'highcharts-angular'

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ControlsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    NoopAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
