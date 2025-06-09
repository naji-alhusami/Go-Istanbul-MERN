import { City } from "./CityType";

export type User = {
  uid: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  cityTravels: City[];
};
