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
    uid: "u1",
    username: "Naji",
    avatarUrl: "s",
    bio: "frg",
  },
  {
    uid: "u2",
    username: "Wael",
    avatarUrl: "s",
    bio: "srfgvb",
  },
  {
    uid: "u3",
    username: "Sulaiman",
    avatarUrl: "s",
    bio: "frg",
  },
  {
    uid: "u4",
    username: "Faidi",
    avatarUrl: "s",
    bio: "srfgvb",
  },
];
