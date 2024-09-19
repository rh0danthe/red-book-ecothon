import { Typography } from "../../typography/Typography";
import Paws from "/src/assets/paws.svg";
import Info1 from "/src/assets/welcome-info-img1.png";
import Info2 from "/src/assets/welcome-info-img2.png";
import Info3 from "/src/assets/welcome-info-img3.png";
import Border from "/src/assets/info-border.png";

function DescriptionSector() {
  return (
    <div className="relative flex flex-col gap-32 min-h-screen bg-[#fbfef1] overflow-hidden">
      <div className="px-8">
        <Typography type="h2" className="text-center px-4">
          Добро пожаловать на наш сайт, посвященный краснокнижным животным Москвы.
        </Typography>
        <Typography type="p3" className="text-center mt-3">
          Ресурс создан с целью повышения осведомленности и привлечения внимания
          к уникальному биологическому разнообразию нашей столицы.
        </Typography>
      </div>

      <div className="flex justify-around px-20">
        <div className="flex flex-col items-center text-center max-w-lg">
          <img
            src={Info1}
            alt="info picture"
            className="w-full h-auto mb-4"
          />
          <Typography type="p5">
            Исследуйте разнообразие московской фауны через яркие фотографии, подробные описания и интерактивные карты ареалов обитания.
          </Typography>
        </div>

        <div className="flex flex-col items-center text-center max-w-lg">
          <img
            src={Info2}
            alt="info picture"
            className="w-full h-auto mb-4"
          />
          <Typography type="p5">
            Узнайте о уникальных особенностях этих животных и об усилиях, предпринимаемых для их сохранения.
          </Typography>
        </div>

        <div className="flex flex-col items-center text-center max-w-lg">
          <img
            src={Info3}
            alt="info picture"
            className="w-full h-auto mb-4"
          />
          <Typography type="p5">
            Присоединяйтесь к нам в этом захватывающем путешествии и откройте удивительный мир природы, скрытый в сердце мегаполиса.
          </Typography>
        </div>
      </div>

      <img
        src={Border}
        alt="Border"
        className="w-full h-72 mt-8"
      />
    </div>
  );
}

export default DescriptionSector;
