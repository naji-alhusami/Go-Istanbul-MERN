import istanbulImg from "../../../Images/istanbul.jpg";
// import najiImg from "../../../Images/naji.jpg";

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
  continent: string;
  city: string;
  year: number;
  description: string;
  places: Place[];
};

export const TRAVEL_DATA: City[] = [
  {
    cid: "c1",
    creatorId: "u1",
    continent: "Europe",
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
    continent: "Europe",
    city: "Istanbul",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p2",
        place: "Sisli",
        description: "Sisli",
        imageUrl: istanbulImg,
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
    continent: "Europe",
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
    continent: "Europe",
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
  {
    cid: "c5",
    creatorId: "u1",
    continent: "Europe",
    city: "Berlin",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "Berlin",
        description: "Berlin",
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
    cid: "c6",
    creatorId: "u2",
    continent: "Europe",
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
  {
    cid: "c7",
    creatorId: "u1",
    continent: "Europe",
    city: "Paris",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "Effil Tour",
        description: "Effil Tour",
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
    cid: "c8",
    creatorId: "u2",
    continent: "Europe",
    city: "Paris",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "Effil Tour",
        description: "Effil Tour",
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
    cid: "c9",
    creatorId: "u3",
    continent: "Europe",
    city: "Paris",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "shanzilzi",
        description: "shanzilzi",
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
    cid: "c10",
    creatorId: "u3",
    continent: "Europe",
    city: "Brussel",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "plats",
        description: "plats",
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
    cid: "c11",
    creatorId: "u1",
    continent: "Europe",
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
  {
    cid: "c12",
    creatorId: "u1",
    continent: "Asia",
    city: "Cairo",
    year: 2020,
    description: "aaa",
    places: [
      {
        pid: "p6",
        place: "Neel River",
        description: "Neel River",
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
