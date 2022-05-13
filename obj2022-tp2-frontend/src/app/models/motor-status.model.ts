import { ControlState } from "./enums/control-state.enum";
import { Direction } from "./enums/direction.enum";

export interface MotorStatus {
  state: ControlState,
  target: number,
  direction: Direction,
  speed: number,
  eventDate: Date,
}