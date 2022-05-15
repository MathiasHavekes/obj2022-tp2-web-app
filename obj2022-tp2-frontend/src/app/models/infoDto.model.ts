import { ControlState } from "./enums/control-state.enum";
import { Direction } from "./enums/direction.enum";

export interface InfoDto {
  temperature: number,
  distance: number,
  state: ControlState,
  speed: number,
  direction: Direction,
  percentage: number,
  eventDate: string,
}