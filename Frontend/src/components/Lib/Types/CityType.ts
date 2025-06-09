import { Place } from "./PlaceType";

export type City = {
  cid: string;
  creatorId: string;
  city: string;
  year: number;
  description: string;
  places: Place[];
};