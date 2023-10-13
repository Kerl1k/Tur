import { ICity } from "./ICity";

export interface IAirplane {
  id: number;
  name: string;
  city: ICity[];
}
