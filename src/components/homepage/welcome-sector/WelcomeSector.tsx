import { useNavigate } from "react-router";
import Button from "../../button/Button";
import { Typography } from "../../typography/Typography";
import "./styles.scss";

function WelcomeSector() {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate("/map");
  };
  const goToEncyclopedia = () => {
    navigate("/encyclopedia");
  };
  return (
    <div className="background flex items-center justify-end relative">
      <div className="w-[53vw] h-full relative">
      <div className="absolute inset-0 bg-[#0000005d] blur bottom-10"></div>

        <div className="relative flex flex-col max-h-screen justify-evenly gap-14 pr-28 pl-12 pt-40">
          <div>
            <Typography type="h1" className="text-white">
              Узнай редких обитателей Москвы: путешествие <br/>в мир краснокнижных
              животных.
            </Typography>
            <Typography type="p3" className="text-white pt-5">
              Краснокнижные животные — наше природное наследие, и от нас зависит
              его сохранность для будущих поколений. Посещая парки Москвы,
              помните о хрупкости <br/> этих экосистем и бережно относитесь к
              окружающему миру.
            </Typography>
          </div>
          <div className="flex flex-row pl-10 gap-10 justify-left">
            <Button colorBehavior="white" fontBehaviour="p4" className="w-80 h-20 text-[#535C27]" onClick={goToMap}>Открыть карту</Button>
            <Button colorBehavior="whitetp" fontBehaviour="p4" className="w-80 h-20" onClick={goToEncyclopedia}>В энциклопедию</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSector;
