import { ControlState } from "../models/enums/control-state.enum";
import { Direction } from "../models/enums/direction.enum";


export function getStateName(state: ControlState) {
  switch (state) {
    case ControlState.automatic:
      return 'Automatique';
    case ControlState.manuel:
      return 'Manuel';
    case ControlState.openDoor:
      return 'Ouvrir';
    case ControlState.closeDoor:
      return 'Fermer';
    default:
      return undefined;
  }
}

export function getDirectionName(direction: Direction) {
  switch (direction) {
    case Direction.up:
      return 'Haut';
    case Direction.stop:
      return 'Arrêt';
    case Direction.down:
      return 'Bas';
    default:
      return undefined;
  }
}
