import { ILoginManager } from "./ILoginManager";
import { ITours } from "./ITours";

export interface IReservation {
  id: number;
  phone: number;
  user: string;
  persone: number;
  days: number;
  tour: ITours;
  status: string;
  manager?: number;
}
