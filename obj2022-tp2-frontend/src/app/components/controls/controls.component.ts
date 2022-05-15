import { Component, OnInit } from '@angular/core';
import { ControlDto } from 'src/app/models/controlDto.model';
import { ControlState } from 'src/app/models/enums/control-state.enum';
import { getStateName } from 'src/app/shared/util.static';
import { ControlsService } from './controls.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class TargetInputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const numberRegEx = /\-?\d*\.?\d{1,2}/;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  controlStateEnum = ControlState;

  selectedControls: ControlDto = {
    state: ControlState.manuel, 
    target: null,
  };

  targetFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
    Validators.pattern(numberRegEx),
  ]);

  matcher = new TargetInputErrorStateMatcher();

  constructor(
    private readonly controlsService: ControlsService
  ) { }

  setNewControlState(newState: ControlState) {
    if(newState === ControlState.manuel && !this.selectedControls.target) return;
    this.selectedControls.state = newState;
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
