import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import arrow from "../../assets/icons/arrow-left-p-6.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bikes } from "../../constants/Bikes";
import box from "../../assets/icons/box_icon.svg";
import paguedepois from "../../assets/icons/pague_depois.svg";
import { BikeTec } from "../../types/Bikes";
import { ContextConsumer } from "../../contexts/Context";
import formatePrice from "../../utils/formatPrice";

const Bike = () => {
  const context = React.useContext(ContextConsumer);
  const params = useParams();
  const navTo = useNavigate();
  const Bike = bikes.find((bike) => bike.id === params.bike);
  const tecs = Object.keys(Bike?.tec ?? {});

  React.useEffect(() => {
    if (!Bike) {
      navTo("/bikes");
    }
  }, []);

  function handlePay() {
    if (Bike && context?.setBike) {
      context.setBike(Bike);
      sessionStorage.setItem("bike", JSON.stringify(Bike));
      navTo("/payment");
    }
  }

  return (
    <>
      <Navbar />
      <section className="mx-w104px mb-h256px left-animate">
        <h1 className="text-40 font-bold text-support-100 tracking-10px">
          {Bike?.name}
        </h1>
        <div className="grid grid-cols-[1.5fr_2fr] mt-8 gap-8 xl:grid-cols-[1fr]">
          <img className="h-full object-cover mx-auto" src={Bike?.image} />
          <div>
            <p className="text-support-200 mb-10">{Bike?.description}</p>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-1">
              <div>
                <h2 className="uppercase text-14 font-medium tracking-[2%] text-support-100 mb-2">
                  Informações
                </h2>
                <div className="p-8 bg-support-900 flex flex-col gap-4">
                  <div className="flex items-center gap-3 p-1 bg-support-1000">
                    <img className="w-[24px] h-[24px]" src={box} />
                    <p className="text-support-100">
                      {Bike?.estoque} em estoque
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-1 bg-support-1000">
                    <img className="w-[24px] h-[24px]" src={paguedepois} />
                    <p className="text-support-100">
                      {formatePrice(Bike?.preco ?? 0)} a hora
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-support-900 flex flex-col gap-4 mt-8">
                  {Bike?.skills?.map((skill) => {
                    return (
                      <li
                        className="text-support-100 flex gap-4 items-center before:w-2 before:h-2 before:block before:bg-primary-300"
                        key={skill}
                      >
                        {skill}
                      </li>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="uppercase text-14 font-medium tracking-[2%] text-support-100 mb-2">
                  FICHA TÉCNICA
                </h2>
                <div className="p-8 bg-support-900 flex flex-col gap-3">
                  {tecs.map((tec, index) => {
                    if (Bike && tec in Bike.tec) {
                      return (
                        <div key={tec}>
                          <div className="flex items-center justify-between">
                            <p className="capitalize text-support-100">{tec}</p>
                            <p className="text-support-100">
                              {Bike?.tec[tec as keyof BikeTec]}
                            </p>
                          </div>
                          {tecs.length - 1 > index && (
                            <span className="w-full h-[2px] bg-support-800 block" />
                          )}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
              <button
                onClick={handlePay}
                className="button uppercase mt-8 group"
              >
                Alugar {Bike?.name}
                <img
                  src={arrow}
                  className="group-hover:animate-swingx"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bike;
