import React from "react";
import logo from "../../assets/icons/Pedal.svg";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <header className="mt-h60px mx-w104px flex items-center justify-between mb-h100px">
      <Link to="/">
        <img src={logo} alt="Logo da Pedal." />
      </Link>
      <label
        className={`hidden border-t border-support-100 border-solid mb:block w-5 h-5 after:w-full after:block after:h-px after:bg-support-100 after:mt-[4.5px] before:w-full before:block before:h-px before:bg-support-100 before:mt-[4.5px] after:relative before:relative after:transition-transform after:duration-500 before:transition-transform before:duration-500 ${
          nav
            ? "border-t-0 after:transform after:rotate-45 before:transform before:rotate-[135deg] after:-top-[4.5px]"
            : ""
        }`}
        onClick={() => setNav(!nav)}
      />

      <nav
        className={`${
          nav ? "mb:visible mb:w-3/5" : "mb:invisible mb:w-16"
        } mb:fixed mb:left-0 mb:top-0 mb:h-full mb:bg-support-1000 mb:p-8 mb:z-40 mb:pt-[60px] overflow-hidden transition-all duration-500 whitespace-nowrap`}
      >
        <ul className="flex items-center gap-8 mb:flex-col mb:items-start">
          <li>
            <Link className={styles.linknav} to="/bikes">
              Alugar
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.linknav}>
              Onde estamos
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.linknav}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
