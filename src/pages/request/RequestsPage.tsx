import { Typography } from "../../components/typography/Typography.tsx";
import { useAuth } from "../../lib/context/AuthContext.tsx"; 
import RequestsList from "../../components/requests-list/RequestsList.tsx";
import "../../assets/welcome-info-img1.png";
import { MyRequest } from "../../lib/models/MyRequest.ts";
const RequestsPage = () => {
  let requests: MyRequest[];
  requests = [
    {
      id: 1,
      name: "Негр1",
      text: "я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экото я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экотон я вахуи негры вахуи гандоны экотон"
      ,
      img: "https://media.tenor.com/Y71Ht5SlgoQAAAAe/%D1%82%D0%BE%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%BE%D1%85%D1%83%D0%B9.png",
      geo: [313, 133],
    },
    {
      id: 2,
      name: "Негр2",
      text: "я вахуи негры вахуи гандоны экотон",
      img: "https://media.tenor.com/Y71Ht5SlgoQAAAAe/%D1%82%D0%BE%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%BE%D1%85%D1%83%D0%B9.png",
      geo: [313, 133],
    },
    {
      id: 3,
      name: "Негр3",
      text: "я вахуи негры вахуи гандоны экотон",
      img: "https://media.tenor.com/Y71Ht5SlgoQAAAAe/%D1%82%D0%BE%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%BE%D1%85%D1%83%D0%B9.png",
      geo: [313, 133],
    },
    {
      id: 4,
      name: "Негр3",
      text: "я вахуи негры вахуи гандоны экотон",
      img: "https://media.tenor.com/Y71Ht5SlgoQAAAAe/%D1%82%D0%BE%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%BE%D1%85%D1%83%D0%B9.png",
      geo: [313, 133],
    },
  ];
  
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
        <RequestsList requests={requests}/>
      </div>
      )}
    </div>
  );
};

export default RequestsPage;