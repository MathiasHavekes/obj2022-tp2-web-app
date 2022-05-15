import { Injectable } from '@angular/core';
import { ControlsRest } from 'src/app/services/controls.rest';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  postControls = this.controlsRest.postControls;

  constructor(
    private readonly controlsRest: ControlsRest,
  ) { }
}
