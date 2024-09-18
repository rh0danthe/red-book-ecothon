import { LatLngTuple } from "leaflet";
import { Coordinates } from "../models/coordinates";

export const formatCoordinatesToLatLng = (
  coords: Coordinates[][],
): LatLngTuple[][] => {
    if (!coords) return [];
    if (coords.length < 0) return [];
  return coords.map((polygon) =>
    polygon.map((coord) => [coord.latitude, coord.longitude]),
  );
};

export const formatLatLngToCoordinates = (
  coords: LatLngTuple[][],
): Coordinates[][] => {
    if (!coords) return [];
    if (coords.length < 0) return [];
  return coords.map((polygon: LatLngTuple[]) =>
    polygon.map((coord: LatLngTuple) => ({
      latitude: coord[0],
      longitude: coord[1],
    })),
  );
};
