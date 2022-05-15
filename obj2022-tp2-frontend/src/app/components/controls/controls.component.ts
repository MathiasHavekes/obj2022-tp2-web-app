import { Component, OnInit } from '@angular/core';
import { ControlDto } from 'src/app/models/controlDto.model';
import { ControlState } from 'src/app/models/enums/control-state.enum';
import { getStateName } from 'src/app/shared/util.static';
import { ControlsService } from './controls.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  controlStateEnum = ControlState;

  target: number | undefined;

  selectedControls: ControlDto = {
    state: ControlState.automatic, 
    target: undefined,
  };

  constructor(
    private readonly controlsService: ControlsService
  ) { }

  ngOnInit(): void {
  }

  setNewControlState(newState: any) {
    console.log(newState)
  }

  setNewTarget() {
    if(!this.target || !(Number(this.target) == NaN) || this.target > 100 || this.target < 100) return
    
    this.selectedControls.target = this.target

    this.postControlStateChanges();
  }

  getStateName(state: ControlState) {
    return getStateName(state);
  }

  private postControlStateChanges() {
    this.controlsService
      .postControls(this.selectedControls)
      .subscribe();
  }
}
