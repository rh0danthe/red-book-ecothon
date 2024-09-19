import { useState } from "react";
import { useAuth } from "../../../lib/context/AuthContext";
import Button from "../../button/Button";
import ModerCreateList from "./ModerCreateList";

function OptionList() {
  const { isAdmin, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="bg-[#fbfef1] absolute top-28 left-36 rounded-3xl border-2 border-black p-10"
    >
      <div className="flex flex-col items-stretch">
        <Button colorBehavior="transparentTop" fontBehaviour="p3">
          Обращения
        </Button>

        {isAdmin && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              colorBehavior="transparentTop"
              fontBehaviour="p3"
              className="w-72"
            >
              Добавить модератора
            </Button>

            {isVisible && (
              <div className="absolute -top-[130px] left-64">
                <ModerCreateList />
              </div>
            )}
          </div>
        )}

        <Button
          onClick={handleLogout}
          colorBehavior="transparent2"
          fontBehaviour="p3"
        >
          Выход
        </Button>
      </div>
    </div>
  );
}

export default OptionList;
