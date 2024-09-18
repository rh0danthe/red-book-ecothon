import { Typography } from "../../components/typography/Typography.tsx";
import LoginForm from "./LoginForm.tsx";
import loginFaq from '../../assets/login-faq.svg';
import { useState } from "react";

const LoginPage = () => {
  const [isHoveringTypo, setIsHoveringTypo] = useState(false);
  const [isHoveringIcon, setIsHoveringIcon] = useState(false);
  const onTypoMouseOver = () => {
    setIsHoveringTypo(true);
  }
  const OnTypoMouseOut = () => {
    setIsHoveringTypo(false);
    setIsHoveringIcon(false);
  }

  const onIconMouseOver = () => {
    setIsHoveringIcon(true);
  }
  

  return (
    <div className='w-screen h-screen bg'>
      <div className='absolute flex flex-col items-center top-1/2 left-1/2 
      translate-x-[-50%] translate-y-[-50%] bg-[#ECEDE8] bg-opacity-30
      desktop:w-[400px] min-w-[380px] h-[543px] rounded-[24px]'>
        <Typography type={'h3'} color='text-white' className='mb-[52px] mt-[62px]'>Вход</Typography>
        <LoginForm/>
        <div className='mt-[18px] flex gap-[14.25px]'>
          <div onMouseOver={onTypoMouseOver} onMouseOut={OnTypoMouseOut}>
            <Typography type={'p1'} color='text-white' className='relative text-center w-[250px] hover:underline'>
              Почему я не могу войти?</Typography>
          </div>
          {isHoveringTypo && <img src={loginFaq} onMouseOver={onIconMouseOver}
                                  alt="" className='absolute translate-x-[220px] translate-y-[3px]'/>}
        </div>
        {isHoveringIcon &&  
          <div className='absolute translate-x-[300px] translate-y-[450px] bg-[#ECEDE8] bg-opacity-60 h-[76px] rounded-[24px] p-[12px]'>
            <Typography type={"p1"} color={'font-Green'} className='text-center'>
              Регистрация на нашем сайте доступна <br/> только для приглашённых пользователей.</Typography>
          </div>
        }
      </div>
    </div>
  );
};

export default LoginPage;