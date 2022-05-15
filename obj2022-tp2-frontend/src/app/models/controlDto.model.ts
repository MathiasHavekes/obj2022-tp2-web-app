import { ControlState } from "./enums/control-state.enum";

export interface ControlDto {
  state: ControlState,
  target: number | undefined,
}
