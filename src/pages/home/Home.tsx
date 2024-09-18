import DescriptionSector from "../../components/homepage/description-sector/DescriptionSector";
import WelcomeSector from "../../components/homepage/welcome-sector/WelcomeSector";

function Home() {
  return (
    <div className="max-w-full overflow-x-hidden relative">
      <WelcomeSector></WelcomeSector>
      <div
        className="bg-[#fbfef1] h-[348px] translate-x-[-100px] translate-y-[-100px] absolute -z-1 w-[150vw]"
        style={{ filter: "blur(30px)" }}
      ></div>
      <div className=" relative z-10">
        <DescriptionSector></DescriptionSector>
      </div>
    </div>
  );
}

export default Home;
