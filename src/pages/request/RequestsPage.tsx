import { Typography } from "../../components/typography/Typography.tsx";
import { useAuth } from "../../lib/context/AuthContext.tsx"; 
import RequestsList from "../../components/requests-list/RequestsList.tsx";
import "../../assets/welcome-info-img1.png";
import { MyRequest } from "../../lib/models/MyRequest.ts";
const RequestsPage = () => {
  const requests: MyRequest[] = [
    {
      id: 1,
      text: "Заметил дальневосточного леопарда в тайге на Дальнем Востоке. Очень редкий вид, выглядит здоровым, но осторожным. Следует информировать природоохранные органы.",
      name: "Иван",
      img: "https://avatars.mds.yandex.net/i?id=3e834c8adec7776aca274fd8f4c9780a_l-10963969-images-thumbs&n=13",
      geo: [43.1195, 131.8828], // Дальний Восток России
    },
    {
      id: 2,
      text: "Обнаружил гнездо белого журавля (стерх) на болоте в Ямало-Ненецком автономном округе. Птицы выглядят хорошо, но необходимо сохранить их место обитания.",
      name: "Анастасия",
      img: "https://avatars.mds.yandex.net/i?id=8234a7f1fbf0e3ba3eaa32a7778e6869534eda6ffc1cbde7-4571459-images-thumbs&n=13",
      geo: [66.5326, 66.6156], // Стерхи в Сибири
    },
    {
      id: 3,
      text: "На Камчатке заметил несколько каланов недалеко от побережья. Это удивительное зрелище, учитывая их редкость. Важно сохранять чистоту побережья для их безопасности.",
      name: "Алексей",
      img: "https://i.ytimg.com/vi/NnxIlpWuOVw/maxresdefault.jpg",
      geo: [56.0097, 160.6425], // Камчатка
    },
    {
      id: 4,
      text: "Наблюдал амурского тигра возле реки в Приморском крае. Тигр был один, выглядел спокойно, охотился. Природоохранные меры, кажется, приносят плоды.",
      name: "Ольга",
      img: "https://mirfauni.cdnbro.com/posts/38118470-amurskii-tigr-na-okhote-3.jpg",
      geo: [44.1422, 133.2577], // Приморский край
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