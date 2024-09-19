import { Link } from "react-router-dom";
import { useAuth } from "../../lib/context/AuthContext";
import mainLogo from "/src/assets/mainLogo.svg";
import Button from "../button/Button";
import { Typography } from "../typography/Typography";
import Icon from "/src/assets/profile.png";
import { useState } from "react";
import OptionList from "./option-list/OptionList";

function Header({ className }: { className?: string }) {
  const { isLoggedIn, isAdmin } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <nav>
      <div
        className={`z-[9999] flex flex-row justify-between items-center ${className} h-[108px] pr-32 pl-20 fixed top-0 left-0`}
      >
        {isLoggedIn ? (
          isAdmin ? (
            <div 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              className="bg-transparent h-40 pt-[52px] pl-[44px] relative"
            >
              <img src={Icon} className="absolute left-6 top-12" />
              <Button
                colorBehavior="white"
                className="w-[222px] h-[52px] font-bold pl-16"
                fontBehaviour="p3"
              >
                Администратор
              </Button>
              {isVisible && (
                <div className="">
                  <OptionList onClick={handleMouseLeave}/>
                </div>
              )}
            </div>
          ) : (
            <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-transparent h-40 pt-[52px] pl-[44px] relative" 
            >
              <img src={Icon} className="absolute left-6 top-12" />
              <Button
                colorBehavior="white"
                className="w-[182px] h-[52px] font-bold pl-16"
                fontBehaviour="p3"
              >
                Модератор
              </Button>
              {isVisible && (
                <div className="">
                  <OptionList onClick={handleMouseLeave} />
                </div>
              )}
            </div>
          )
        ) : (
          <Link to="/login">
            <Button
              colorBehavior="white"
              className="w-[142px] h-[52px] font-bold"
              fontBehaviour="p3"
            >
              Войти
            </Button>
          </Link>
        )}

        <Link to="/">
          <img src={mainLogo} alt="Main logo" className="h-[55px] pl-10" />
        </Link>

        <div className="flex flex-row gap-16">
          <div>
            <Link to="/map">
              <Typography
                type="p3"
                color="text-white"
                className="hover:underline"
              >
                Карта
              </Typography>
            </Link>
          </div>
          <div>
            <Link to="/encyclopedia">
              <Typography
                type="p3"
                color="text-white"
                className="hover:underline"
              >
                Энциклопедия
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
