import Input from "../../components/Input/Input";
import arrow from "../../assets/icons/arrow-left-p-6.svg";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navTo = useNavigate();

  return (
    <div className="h-full relative left-animate">
      <Input
        type="text"
        regexp={/[0-9]{3}[\.\-/]?[0-9]{3}[\.\-/]?[0-9]{3}[\.\-/]?[0-9]{2}/g}
        labelStyles="mb-8"
      >
        CPF
      </Input>
      <Input
        type="text"
        labelStyles="mb-8"
        regexp={
          /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/g
        }
      >
        CELULAR
      </Input>
      <Input
        type="email"
        labelStyles="mb-8"
        regexp={
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }
      >
        EMAIL
      </Input>
      <button
        className="button absolute bottom-0 left-0 group tbl:static tbl:inset-auto tbl:mt-8"
        onClick={() => navTo("/payment")}
      >
        Voltar
      </button>
      <button className="button absolute bottom-0 right-0 group tbl:static tbl:inset-auto tbl:mt-8">
        reservar bike
        <img src={arrow} className="group-hover:animate-swingx" />
      </button>
    </div>
  );
};

export default Step2;
