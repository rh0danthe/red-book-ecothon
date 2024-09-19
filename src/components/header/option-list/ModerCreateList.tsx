import { FormProvider, useForm } from "react-hook-form";
import Button from "../../button/Button";
import TextBox from "../../textbox/TextBox2";
import { Typography } from "../../typography/Typography";
import { createUser } from "../../../lib/api/createUser";
import { useState } from "react";

function ModerCreateList() {
  const methods = useForm();
  const { reset } = methods;

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async () => {
    const data = methods.getValues();
    try {
      await createUser({ email: data.email });
      reset(); 
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Произошла неизвестная ошибка."
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="p-32 overflow-visible">
          <div className="bg-[#fbfef1] rounded-3xl w-96 border-2 border-black p-10">
            <div className="flex flex-col">
              <Typography type="p4" className="text-center">
                Добавление модератора
              </Typography>
              <Typography type="p1" className="text-center pb-7">
                После того как вы нажмете кнопку “Добавить” на введённую почту отправится ссылка на регистрацию.
              </Typography>
              <TextBox
                name="email"
                label="Введите почту"
                type="email"
                className="w-[300px] h-[55px] bg-[#0000004f] placeholder-white place-content-end pl-4"
              />
              <Button colorBehavior="green" fontBehaviour="p3" className="h-7 mt-4" type="submit">
                Добавить
              </Button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default ModerCreateList;
