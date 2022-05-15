import { Component, OnInit } from '@angular/core';
import { ControlState } from 'src/app/models/enums/control-state.enum';
import { Direction } from 'src/app/models/enums/direction.enum';
import { InfoDto } from 'src/app/models/infoDto.model';
import { getDirectionName, getStateName } from 'src/app/shared/util.static';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoDetails: InfoDto | undefined;

  progressBarBuffer = 100;

  constructor(
    private readonly infoService: InfoService,
  ) { }

  ngOnInit(): void {
    this.infoService
      .getInfoDetails()
      .subscribe(result => 
        this.infoDetails = result);
  }

  getStateName(state: ControlState) {
    return getStateName(state);
  }

  getDirectionName(direction: Direction) {
    return getDirectionName(direction)
  }
}
