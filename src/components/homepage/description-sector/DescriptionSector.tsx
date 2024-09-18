import { Typography } from "../../typography/Typography";
import Paws from "/src/assets/paws.svg";
import Info1 from "/src/assets/welcome-info-img1.png";
import Info2 from "/src/assets/welcome-info-img2.png";
import Info3 from "/src/assets/welcome-info-img3.png";
import Border from "/src/assets/info-border.png";

function DescriptionSector() {
  return (
    <div className="flex flex-col justify-between min-h-[180vh] bg-[#fbfef1] overflow-hidden relative">
      <img
        src={Paws}
        alt="Paws"
        className="w-full h-[500px] object-contain absolute top-0 left-[-600px]"
      />

      <div>
        <Typography type="h2" className="text-center px-60">
          Добро пожаловать на наш сайт, посвященный краснокнижным животным
          Москвы.
        </Typography>

        <Typography type="p3" className="text-center px-[430px] pt-3">
          Ресурс создан с целью повышения осведомленности и привлечения внимания
          к уникальному биологическому разнообразию нашей столицы.
        </Typography>
      </div>

      <div className="flex flex-row flex-wrap gap-6 px-44 -m-16">
        <div className="flex-1 p-2">
          <img
            src={Info1}
            alt="info picture"
          />
          <Typography type="p5" className="px-4 pt-20 text-center">
          Исследуйте разнообразие московской фауны через яркие фотографии, подробные описания и интерактивные карты ареалов обитания.
          </Typography>
        </div>
        <div className="flex-1 p-2">
          <img
            src={Info2}
            alt="info picture"
          />
          <Typography type="p5" className="px-4 pt-20 text-center">
          Узнайте о уникальных особенностях этих животных и об усилиях, предпринимаемых для их сохранения.
          </Typography>
        </div>
        <div className="flex-1 p-2">
          <img
            src={Info3}
            alt="info picture"
          />
          <Typography type="p5" className="px-4 pt-20 text-center">
          Присоединяйтесь к нам в этом захватывающем путешествии и откройте удивительный мир природы, скрытый в сердце мегаполиса.
          </Typography>
        </div>
      </div>
      <img
        src={Paws}
        alt="Paws"
        className="-rotate-[160deg] w-full h-[500px] object-contain absolute right-[-600px] bottom-48 "
      />
      <img src={Border} alt="Paws" className="w-full h-72 z-10" />
    </div>
  );
}

export default DescriptionSector;
