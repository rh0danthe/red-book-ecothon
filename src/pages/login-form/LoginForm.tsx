import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import TextBox from "../../components/textbox/TextBox";
import { sendLoginCredentials } from "../../lib/api/sendLoginCredentials";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../lib/context/AuthContext";
import './styles.scss';

function LoginForm() {
  const methods = useForm();
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async () => {
    const data = methods.getValues();
    try {
      await sendLoginCredentials({ email: data.email, password: data.password });
      login();
      navigate("/");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Произошла неизвестная ошибка.");
    }
  };

  return (
    <FormProvider {...methods}> 
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-stretch gap-[18px] w-full pl-[30px] pr-[30px]">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <TextBox label="Почта" name="email" type='email'></TextBox>
        <TextBox label="Пароль" name="password" type='password'></TextBox>
        <Button colorBehavior="white" type="submit" fontBehaviour="p4" className='mt-[16px]'>
          Войти
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
