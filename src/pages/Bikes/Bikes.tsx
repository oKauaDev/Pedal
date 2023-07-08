import React from "react";
import arrow from "../../assets/icons/arrow-left-p-6.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { bikes } from "../../constants/Bikes";
import { Bike } from "../../types/Bikes";
import { Link } from "react-router-dom";

const Bikes = () => {
  const [bike, setBike] = React.useState<Bike | undefined>(bikes[0]);
  const bikes_names = bikes.map((bike) => bike.name);

  function getBikeByName(name: string): Bike | undefined {
    return bikes.find((bike) => bike.name === name);
  }

  return (
    <>
      <Navbar />
      <section className="mx-w104px mb-h256px">
        <h1 className="text-40 text-support-100 font-bold tracking-10px">
          Escolha sua bicicleta.
        </h1>
        <p className="text-support-200 text-16 mt-5">
          Escolha a bicicleta que deseja alugar.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 left-animate xl:grid-cols-[1fr_1fr] tbl:block">
          <div>
            <ul className="bg-support-900 p-1 flex flex-col gap-1 max-w-sm">
              {bikes_names.map((bike_name) => {
                return (
                  <li
                    className={`p-3 text-support-100 cursor-pointer ${
                      bike_name === bike?.name ? "bg-support-1000" : ""
                    }`}
                    key={bike_name}
                    onClick={() => setBike(getBikeByName(bike_name))}
                  >
                    {bike_name}
                  </li>
                );
              })}
            </ul>
            <p className="mt-[60px] text-support-200 leading-normal">
              {bike?.description}
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {bike?.skills?.map((skill) => {
                return (
                  <li
                    className="text-support-100 flex gap-3 items-center before:w-2 before:h-2 before:block before:bg-primary-300"
                    key={skill}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
            <Link to={bike?.id ?? ""} className="button group mt-[60px]">
              ver bicicleta
              <img src={arrow} className="group-hover:animate-swingx" alt="" />
            </Link>
          </div>
          <img className="h-full object-cover xl:hidden" src={bike?.image} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bikes;
