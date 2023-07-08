import React from "react";

const Footer = () => {
  return (
    <footer className="px-w104px bg-support-900 py-h100px">
      <div className="flex flex-wrap gap-[60px]">
        <div>
          <h2 className="uppercase text-support-100 tracking-wide text-20 mb-4">
            BICICLETAS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-support-200 tracking-wide cursor-pointer">
              Dark Bike
            </li>
            <li className="text-support-200 tracking-wide cursor-pointer">
              Oceanicer
            </li>
            <li className="text-support-200 tracking-wide cursor-pointer">
              Starking
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-support-100 tracking-wide text-20 mb-4">
            suporte
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-support-200 tracking-wide cursor-pointer">
              WhatsApp
            </li>
            <li className="text-support-200 tracking-wide cursor-pointer">
              Youtube
            </li>
            <li className="text-support-200 tracking-wide cursor-pointer">
              Discord
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-h100px text-support-100 text-center">
        Pedal. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
