interface IAnimalDescriptionCard {
  attribute: string;
  attributeNumber: number
}
const AnimalDescriptionCard = ({attribute, attributeNumber}: IAnimalDescriptionCard) => {
  const attributes = ["Внешний вид", "Поведение и образ жизни", "Охрана и статус", "Питание"];
  return (
    <div>
      <div>{attributes[attributeNumber]}</div>
      <div>{attribute}</div>
    </div>
  );
};

export default AnimalDescriptionCard;