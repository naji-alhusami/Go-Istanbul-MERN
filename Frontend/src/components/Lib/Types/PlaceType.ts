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
