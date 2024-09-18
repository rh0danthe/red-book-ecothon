import { useAuth } from "../../../lib/context/AuthContext";
import Button from "../../button/Button";

function OptionList() {
  const { isAdmin, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-[#fbfef1] absolute top-24 left-36 rounded-3xl border-2 border-black p-10">
      <Button colorBehavior="transparentTop" fontBehaviour="p3">Обращения</Button>
      {isAdmin && <Button colorBehavior="transparentTop" fontBehaviour="p3">Добавить модератора</Button>}
      <Button onClick={handleLogout} colorBehavior="transparent2" fontBehaviour="p3">Выход</Button>
    </div>
  );
}

export default OptionList;
