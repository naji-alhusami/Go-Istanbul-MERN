// import { City } from "./CityType";

export type User = {
  uid: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  //   cityTravels: City[];
};

export const DUMMY_USERS: User[] = [
  {
    uid: "p1",
    username: "naji",
    avatarUrl: "s",
    bio: "frg",
    // cityTravels: "This is Naji",
  },
  {
    uid: "u2",
    username: "wael",
    avatarUrl: "s",
    bio: "srfgvb",
  },
];
