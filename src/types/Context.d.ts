import { Bike } from "./Bikes";

export interface Context {
  bike: Bike | undefined;
  setBike: React.Dispatch<React.SetStateAction<Bike | undefined>> | undefined;
}
