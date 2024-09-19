import { LatLngTuple } from "leaflet";

export type MyRequest = {
  id: number;
  name: string;
  text: string;
  geo: LatLngTuple;
  img: string;
}