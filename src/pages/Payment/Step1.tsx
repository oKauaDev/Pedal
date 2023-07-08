import Input from "../../components/Input/Input";
import { locales } from "../../constants/Locales";
import arrow from "../../assets/icons/arrow-left-p-6.svg";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navTo = useNavigate();

  function handleClick() {
    navTo("dados");
  }

  return (
    <div className="h-full relative left-animate">
      <Input
        type="date"
        inputStyles="appearance-none border-none focus:outline-none color-support-100"
        placehoder="Selecione o dia em que você quer reservar a bicicleta."
      >
        DATA DA RESERVA
      </Input>
      <div>
        <div>
          <p className="block mb-2 text-support-100 font-medium tracking-[1%]">
            CIDADE
          </p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8 mn:grid-cols-1">
            {locales.map((locale) => {
              return (
                <label
                  className="px-5 py-3 bg-support-900 flex gap-4 text-support-100 items-center cursor-pointer"
                  key={locale.title}
                >
                  <input
                    className="appearance-none after:w-3 after:h-3 after:border-2 after:border-primary-300 after:border-solid after:block after:rounded-[6px] checked:after:bg-primary-300 after:transition-all after:duration-300 cursor-pointer"
                    type="radio"
                    name="city"
                    value={locale.title}
                  />
                  {locale.title}
                </label>
              );
            })}
          </div>
          <button
            className="button absolute bottom-0 right-0 group tbl:static tbl:inset-auto tbl:mt-8"
            onClick={handleClick}
          >
            continuar
            <img src={arrow} className="group-hover:animate-swingx" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
