import { useState, useEffect } from "react";
import { getAllAnimals } from "../../lib/api/animalApi/getAllAnimals";
import { Animal } from "../../lib/models/animal";
import AnimalCard from "./animal-card/AnimalCard";
import { useNavigate } from "react-router";

function AnimalList() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleCardClick = (id: number) => {
    navigate(`/animal/${id}`);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-[52px]">
      {animals.length === 0 ? (
        <p>Животные пока не добавлены</p>
      ) : (
        animals.map((animal) => (
          <AnimalCard
            animal={animal}
            key={animal.id}
            onClick={() => handleCardClick(animal.id)}
          />
        ))
      )}
    </div>
  );
}

export default AnimalList;
