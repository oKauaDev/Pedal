import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bike from "../../assets/images/mikkel-bech-yjAFnkLtKY0-unsplash.jpg";
import arrow from "../../assets/icons/arrow-left-p-6.svg";
import tecImage from "../../assets/images/advance-tec-img.jpg";
import { Link } from "react-router-dom";
import Locales from "../../components/locales/Locales";
import pague_depois from "../../assets/icons/pague_depois.svg";
import rastreio from "../../assets/icons/rastreio_icon.svg";
import Assessments from "../../components/assessments/Assessments";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-[6fr_5fr] gap-[9.118vw] mx-w104px mb-h156px xl:grid-cols-[3fr_1fr] tbl:block left-animate">
        <div>
          <h1 className="text-support-100 text-40 font-bold tracking-10px mb:text-32">
            Explore a liberdade sobre duas rodas com bicicletas estilosas!
          </h1>
          <p className="leading-normal text-support-200 mt-5">
            Alugue nossas bicicletas e descubra o prazer de pedalar com
            segurança e economia! Nossas bicicletas baratas são equipadas com
            tecnologia avançada e sistemas inovadores para aprimorar a sua
            experiência.
          </p>
          <Link to="bikes" className="button group mt-20">
            alugar bicicleta
            <img src={arrow} className="group-hover:animate-swingx" alt="" />
          </Link>
        </div>
        <LazyLoadImage
          alt="Bicicleta principal da Pedal"
          height="100%"
          width="100%"
          src={bike}
          className="rounded-5 h-full object-cover xl:hidden"
        />
      </section>
      <section className="bg-support-100 px-w104px py-h100px pb-h100px">
        <h1 className="font-bold text-40 leading-[1.2] tracking-10px text-support-1000 mb:text-32">
          Onde estamos ?
        </h1>
        <p className="text-support-800 leading-snug mt-4 mb-10">
          Veja onde você pode pedalar com as nossas bicicletas.
        </p>
        <Locales />
      </section>
      <section className="py-h156px mx-w104px grid grid-cols-[7fr_5fr] gap-[9.688vw] xl:grid-cols-[3fr_1fr] tbl:block">
        <div>
          <h1 className="text-40 text-support-100 font-bold tracking-10px mb:text-32">
            Tecnologia avançada.
          </h1>
          <p className="text-support-200 mt-5">
            Apresentamos nossa tecnologia de ponta, que oferece a segurança que
            você merece. Com nossos rastreadores integrados diretamente ao
            material de cada bicicleta, você pode desfrutar de total
            tranquilidade, sem se preocupar com roubos.
          </p>
          <div className="flex gap-4 mt-10 mb:flex-col">
            <div className="grid grid-cols-[32px_1fr] gap-4 items-center self-start">
              <img src={rastreio} />
              <h2 className="text-24 text-support-100 font-medium leading-none">
                Rastreio
              </h2>
              <p className="text-support-200 leading-snug col-span-full">
                Desfrute de bicicletas equipadas com rastreadores integrados,
                proporcionando segurança total sem taxas adicionais por roubo.
              </p>
            </div>
            <span className="flex-grow w-[2px] block bg-support-900" />
            <div className="grid grid-cols-[32px_1fr] gap-4 items-center self-start">
              <img src={pague_depois} />
              <h2 className="text-24 text-support-100 font-medium leading-none">
                Pague depois
              </h2>
              <p className="text-support-200 leading-snug col-span-full">
                Flexibilizamos o pagamento para você. Use o tempo necessário e
                pague posteriormente, conforme sua conveniência.
              </p>
            </div>
          </div>
          <Link to="bikes" className="button group mt-20">
            QUERO ALUGAR A MINHA
            <img src={arrow} className="group-hover:animate-swingx" alt="" />
          </Link>
        </div>
        <LazyLoadImage
          alt=""
          height="100%"
          width="100%"
          src={tecImage}
          className="rounded-5 h-full object-cover xl:hidden"
        />
      </section>
      <section className="px-w104px bg-support-900 py-h100px mb-h156px">
        <h1 className="text-support-100 font-semibold text-32 leading-tight text-center">
          Vocês tem as melhores bicicletas
        </h1>
        <p className="italic text-support-200 leading-normal mt-5 text-center max-w-4xl mx-auto mb-20">
          "A melhor bicicleta que já experimentei, sem dúvidas. Possui um
          amortecedor e engrenagem excelentes, um guidão perfeito e fácil de
          manusear. Além disso, os pedais proporcionam um conforto excepcional.
          Simplismente maravilhosa!"
        </p>
        <Assessments />
      </section>
      <Footer />
    </>
  );
};

export default Home;
