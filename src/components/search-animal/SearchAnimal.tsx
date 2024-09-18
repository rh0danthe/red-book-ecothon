import searchIcon from "../../assets/search-icon.svg";
import Button from "../button/Button.tsx";
import { useAuth } from "../../lib/context/AuthContext.tsx";
import { useNavigate } from "react-router";
import { useState } from "react";
import cross from "../../assets/cross.svg";

interface SearchAnimalProps {
  IsButtonShowed?: boolean;
  className?: string;
}

const SearchAnimal = ({IsButtonShowed = true, className}: SearchAnimalProps) => {
  const [search, setSearch] = useState('')
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  const SetSearchNull = () => {
    setSearch('');
  }
  const goToCreateForm = () => {
    navigate(`/encyclopedia/create`);
  };
  return (
    <div className={`flex w-full mb-[60px] gap-[44px] ${className || ""}`}>
      <div className='w-full flex bg-Green bg-opacity-50 rounded-[50px] h-[52px] pl-[20px]'>
        <div className='flex items-center w-full gap-[20px]'>
          <img src={searchIcon} className='w-[24px] h-[24px]' alt="" />
          <input className='w-11/12 h-full bg-transparent placeholder:text-white text-white 
              text-[20px] placeholder:text-[20px] placeholder:font-raleway
              outline-none focus:outline-none focus:ring-0 border-none'
                 type="text" placeholder='Введите название животного' 
                 value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        <div className='flex items-center flex-nowrap mr-[30px]'>
          {search !== '' ? <img src={cross} alt="" onClick={SetSearchNull} className='flex items-center w-[24px] h-[24px]'/> : ''}
        </div>
          <Button colorBehavior={'transparent'} fontBehaviour={'p3'} 
                  className='rounded-l-[0px] border-l-none'>Найти</Button>
      </div>
      {isLoggedIn && IsButtonShowed && (
        <Button colorBehavior="green" fontBehaviour="p3" onClick={goToCreateForm} className='w-[240px] h-[52px]'>
          Создать
        </Button>
      )}
    </div>
  );
};

export default SearchAnimal;