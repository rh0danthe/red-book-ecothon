import { Typography } from "../../components/typography/Typography.tsx";
import { useAuth } from "../../lib/context/AuthContext.tsx";
import { geoJson, LatLngTuple } from "leaflet";

interface Review {
  name: string; 
  text: string;
  geo: LatLngTuple;
  img: string;
}
const RequestsPage = () => {
  const reviews: Review[] = [
    {name: "vanya", text: "я вахуи негры вахуи гандоны экотон", img: "../../assets/", geo: [313, 133]}
  ]
  
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn && (
      <div className='pt-[176px] bg-Beige flex flex-col items-center pr-[272px] pl-[272px]'>
        <Typography type='encyclopediaTitle' className='text-Green leading-[55px] mb-[25px]'>Обращение пользователей</Typography>
        <Typography type='encyclopediaSubtitle' className='text-center text-Green mb-[72px] w-[900px]'>
          Эта страница предназначена для администрирования и модерации пользовательских обращений. Все новые обращения,
          отправленные пользователями, отображаются здесь до момента их одобрения или отклонения модераторами.
        </Typography>
        
      </div>
      )}
    </div>
  );
};

export default RequestsPage;