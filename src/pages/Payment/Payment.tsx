import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ContextConsumer } from "../../contexts/Context";
import { Bike } from "../../types/Bikes";
import formatePrice from "../../utils/formatPrice";
import { Route, Routes, useNavigate } from "react-router-dom";
import checkInterface from "../../utils/checkInterface";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Payment = () => {
  const [bike, setBike] = React.useState<Bike>();
  const navTo = useNavigate();
  const context = React.useRef(React.useContext(ContextConsumer));

  React.useEffect(() => {
    const bikeSession = JSON.parse(sessionStorage.getItem("bike") ?? "[]");
    if (context.current.bike) {
      setBike(context.current.bike);
    } else if (
      bikeSession &&
      checkInterface<Bike>(
        bikeSession,
        "description",
        "estoque",
        "id",
        "image",
        "name",
        "preco",
        "skills",
        "tec"
      )
    ) {
      setBike(bikeSession);
    } else {
      navTo("/bikes");
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="mx-w104px mb-h256px left-animate">
        <h1 className="text-40 text-support-100 font-bold tracking-10px mb-8">
          Alugar bicicleta
        </h1>
        <div className="grid grid-cols-[1fr_2fr] gap-8 xl:grid-cols-[1.5fr_2fr] tbl:grid-cols-1">
          <div className="p-5 bg-support-900">
            <img src={bike?.image} />
            <div className="flex items-start justify-between mt-8">
              <h2 className="text-28 font-semibold text-support-100 tracking-wider xl:text-20">
                {bike?.name}
              </h2>
              <p className="text-support-100 xl:text-14">
                {formatePrice(bike?.preco ?? 0)} a hora
              </p>
            </div>
            <p className="mt-8 text-support-200 leading-normal">
              {bike?.description}
            </p>
          </div>
          <Routes>
            <Route path="" element={<Step1 />} />
            <Route path="dados" element={<Step2 />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
