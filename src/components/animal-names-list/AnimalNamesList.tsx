import { useState, useEffect } from "react";
import { getAllAnimals } from "../../lib/api/animalApi/getAllAnimals";
import { Animal, Type } from "../../lib/models/animal";
import Button from "../button/Button";

interface IAnimalNamesList {
    onClick: (id: number) => void;
    type: keyof typeof Type;
  }

function AnimalNamesList({ onClick, type }: IAnimalNamesList) {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await getAllAnimals();
        setAnimals(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="">
  {animals.length === 0 ? (
    <p>Животные пока не добавлены</p>
  ) : (
    animals
      .filter((animal) => animal.type === type)
      .map((animal) => (
        <Button
          colorBehavior={"transparent2"
          }
          className="w-[808px]"
          key={animal.id}
          fontBehaviour="p4"
          onClick={() => onClick(animal.id)}
        >
          {animal.name}
        </Button>
      ))
  )}
</div>

  );
}

export default AnimalNamesList;
