import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import AnimalNamesList from "../../components/animal-names-list/AnimalNamesList";
import InteractiveMap from "../../components/map/InteractiveMap";
import { getAllAnimals } from "../../lib/api/animalApi/getAllAnimals";
import { formatCoordinatesToLatLng } from "../../lib/constants/convertCoordinats";
import { Typography } from "../../components/typography/Typography";
import animalNotFound from "/src/assets/animal-not-chosen.png";
import animalPopup from "/src/assets/animalPopup.png";
import SearchAnimal from "../../components/search-animal/SearchAnimal";
import Button from "../../components/button/Button";
import { getAnimalById } from "../../lib/api/animalApi/getAnimalById";
import AnimalCard from "../../components/animal-names-list/AnimalCard";
import { Animal } from "../../lib/models/animal";
import { useNavigate } from "react-router";
function Map() {
  const [coordinates, setCoordinates] = useState<LatLngTuple[][]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [animalId, setAnimalId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const [animalChosen, setAnimalChosen] = useState<boolean>(false);
  const [animal, setAnimal] = useState<Animal>();
  const navigate = useNavigate();

  const goToAnimal = () => {
    if (animal) navigate(`/animal/${animal.id}`);
  };

  const [showAnimalList, setShowAnimalList] = useState(false);
  const [showPlantList, setShowPlantList] = useState(false);

  const handleAnimalList = () => {
    if (showAnimalList) {
      setShowAnimalList(false);
    } else {
      setShowAnimalList(true);
      setShowPlantList(false);
    }
  };

  const handlePlantList = () => {
    if (showPlantList) {
      setShowPlantList(false);
    } else {
      setShowAnimalList(false);
      setShowPlantList(true);
    }
    if (targetRef1.current) {
      targetRef1.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleAnimalClick = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAnimalById(id);
      if (!data || data.coordinates.length === 0) {
        setError("Coordinates not found.");
        setCoordinates([]);
      } else {
        const formattedCoordinates: LatLngTuple[][] = data.coordinates.map(
          (polygon) =>
            polygon.map((coord) => [coord.latitude, coord.longitude]),
        );

        console.log("Polygon Coordinates:", data);
        setCoordinates(formattedCoordinates);
        setAnimalId(id - 1);
        setAnimalChosen(true);
        setAnimal(data);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
      if (targetRef2.current) {
        targetRef2.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await getAllAnimals();
        const allCoordinates = data.flatMap((animal) =>
          formatCoordinatesToLatLng(animal.coordinates),
        );
        const allNames = data.flatMap((animal) => animal.name);
        setCoordinates(allCoordinates);
        setNames(allNames);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div className="pt-44 text-center bg-[#fbfef1]">
      <Typography type="h2">Интерактивная карта</Typography>
      <Typography type="p3" className="pt-5 px-[20vw]">
        Представляем вам интерактивную карту Москвы с отмеченными территориями
        обитания краснокнижных животных. Узнайте, где живут угрожаемые виды в
        вашем городе и какие меры принимаются для их сохранения.
      </Typography>

      <div className="flex p-28 -mt-13 h-[900px]">
        <div
          ref={targetRef2}
          className="flex gap-8 justify-center relative pt-5 w-full items-end"
        >
          <InteractiveMap
            polygonCoordinates={coordinates}
            className="rounded-3xl pt-5 h-full border-solid border-[6px] border-black"
            names={names}
            animalId={animalId}
          />
          <div>
            {animalChosen && animal ? (
              <div className="h-[655px] w-[410px]">
                <AnimalCard animal={animal} onClick={goToAnimal}></AnimalCard>
              </div>
            ) : (
              <div>
                <img
                  src={animalPopup}
                  className="w-[550px]"
                  alt="Animal Popup"
                />
                <img
                  src={animalNotFound}
                  className="pt-5 h-[675px] w-[550px]"
                  alt="Animal Not Found"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <SearchAnimal IsButtonShowed={false} className="px-28"></SearchAnimal>
      <div className="pb-10">
        <Button
          colorBehavior="transparent2"
          className="w-full"
          fontBehaviour="p4"
          onClick={handleAnimalList}
        >
          Животные
        </Button>
        {showAnimalList && (
          <div className="grid grid-flow-col justify-center items-center gap-2">
          <AnimalNamesList type={"Animal"} onClick={handleAnimalClick} />
          </div>
        )}
        <Button
          colorBehavior="transparent2"
          className="w-full"
          fontBehaviour="p4"
          onClick={handlePlantList}
        >
          Растения
        </Button>
        <div ref={targetRef1}>
          {showPlantList && (
            <div className="grid grid-flow-col justify-center items-center gap-2">
            <AnimalNamesList type={"Plant"} onClick={handleAnimalClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Map;
