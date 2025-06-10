import istanbulImg from "../../../Images/istanbul.jpg";
import najiImg from "../../../Images/naji.jpg";

export type Place = {
  pid: string;
  place: string;
  description: string;
  imageUrl: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type City = {
  cid: string;
  creatorId: string;
  city: string;
  year: number;
  description: string;
  places: Place[];
};

export const TRAVEL_DATA: City[] = [
  {
    cid: "c1",
    creatorId: "u1",
    city: "Berlin",
    year: 2025,
    description: "aaa",
    places: [
      {
        pid: "p1",
        place: "Berlin Tour",
        description: "Amazing Berlin Tour",
        imageUrl: istanbulImg,
        address: "10 W 34th St, New Work, NY 20",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
    ],
  },
  {
    cid: "c2",
    creatorId: "u1",
    city: "Istanbul",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p2",
        place: "Sisli",
        description: "Sisli",
        imageUrl: najiImg,
        address: "10 W 34th St, New Work, NY 10",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
      {
        pid: "p3",
        place: "Besiktas",
        description: "Besiktas",
        imageUrl: istanbulImg,
        address: "10 W 34th St, New Work, NY 10",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
      {
        pid: "p4",
        place: "Taksim",
        description: "Taksim",
        imageUrl: istanbulImg,
        address: "10 W 34th St, New Work, NY 10",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
    ],
  },
  {
    cid: "c3",
    creatorId: "u2",
    city: "Rome",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p5",
        place: "Rome",
        description: "Amzing Rome",
        imageUrl: istanbulImg,
        address: "10 W 34th St, New Work, NY 10",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
    ],
  },
  {
    cid: "c4",
    creatorId: "u3",
    city: "Istanbul",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "Taksim",
        description: "Taksim",
        imageUrl: istanbulImg,
        address: "10 W 34th St, New Work, NY 10",
        coordinates: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
      },
    ],
  },
];
