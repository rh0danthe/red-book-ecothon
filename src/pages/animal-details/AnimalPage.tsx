import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Animal } from "../../lib/models/animal";
import { getAnimalById } from "../../lib/api/animalApi/getAnimalById";
import Button from "../../components/button/Button";
import { useAuth } from "../../lib/context/AuthContext";
import { deleteAnimal } from "../../lib/api/animalApi/deleteAnimal";
import AnimalDetails from "./AnimalDetails.tsx";

function AnimalPage() {
  const { isLoggedIn } = useAuth();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const animalId = Number(id);

    if (isNaN(animalId)) {
      setError("Invalid animal ID.");
      setLoading(false);
      return;
    }

    const fetchAnimalData = async () => {
      try {
        setLoading(true);
        const data = await getAnimalById(animalId);
        if (!data) {
          setError("Животное не существует.");
          return;
        }
        setAnimal(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const goToUpdateForm = () => {
    navigate(`/animal/${id}/update`);
  };

  const handleDeleteAnimal = async () => {
    try {
      await deleteAnimal(animal!.id);
    } catch (err) {
      setError("Ошибка при удалении.");
    }
  };
  
  return (
    <div className="pt-24  bg-Beige">
      {animal ? (
        <AnimalDetails animal={animal}/>
      ) : (
        <p>No animal data available.</p>
      )}
      {isLoggedIn && (
        <div>
          <Button colorBehavior="green" fontBehaviour="p4" onClick={goToUpdateForm}>
            Обновить данные
          </Button>
          <Button colorBehavior="green" fontBehaviour="p4" onClick={handleDeleteAnimal}>
            Удалить животное
          </Button>
        </div>
      )}
    </div>
  );
}

export default AnimalPage;
