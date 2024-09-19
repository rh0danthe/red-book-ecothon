import { Coordinates } from "./coordinates";

export enum Type {
  Animal = "animal",
  Plant = "plant",
  Fish = "fish",
}

type Animal = {
    id: number;
    name: string;
    type: keyof typeof Type;
    description: string;
    reason: string;
    population: string;
    family: string;
    appearance: string;
    behaviour: string;
    status: string;
    nutrition: string;
    coordinates: Coordinates[][];
    imageUrl: string;
  }

type AnimalCreate = {
  name: string;
  description: string;
  reason: string;
  population: string;
  family: string;
  appearance: string;
  behavior: string;
  status: string;
  nutrition: string;
  type: keyof typeof Type;
  coordinates: Coordinates[][];
  image: File;
}

type AnimalUpdate = {
  name: string;
  description: string;
  reason: string;
  population: string;
  family: string;
  appearance: string;
  behavior: string;
  status: string;
  nutrition: string;
  type: keyof typeof Type;
  coordinates: Coordinates[][];
  image: File;
}


export type { Animal, AnimalCreate, AnimalUpdate };