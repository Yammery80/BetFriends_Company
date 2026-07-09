import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/betfriends logo 1.png';
import { HiOutlineUser, HiMenu,HiX } from "react-icons/hi"


function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-5 bg-black/20 backdrop-blur-lg sticky top-0 z-50">

{/* logo */}
    <div className="flex items-center  text-2xl font-bold">
        <img src={logo}  className="h-16 w-16 " />
        <span className="text-[#fafaf8]">Bet</span><span className="text-[#632ab4] hover:[text-shadow:0_0_15px_rgba(168,85,247,0.6)]">Friends</span>
    </div>

 {/* navegación */}
    <div className="flex items-center gap-4">
    <ul className="hidden md:flex flex-row items-center gap-10 bg-transparent rounded-full px-8 py-3 m-0 list-none shadow-inner">
      <li>
        <Link to="/" className="relative px-6 py-2 space-x-3 bg-black text-white font-semibold rounded-full border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group inline-flex">Inicio</Link>
      </li>
      <li>
        <Link to="/nosotros" className=" relative px-6 py-2 space-x-3 bg-black text-white font-semibold rounded-full border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group inline-flex">Acerca de</Link>
      </li>
      <li>
        <Link to="/contacto" className=" relative px-6 py-2 space-x-3 bg-black text-white font-semibold rounded-full border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_1０px_5px_rgba(168,85,247,0.4)] group inline-flex">Contacto</Link>
      </li>
    </ul>
    </div>

    {/* boton login */}

    <div className="flex items-center gap-4">
      <div className="md:flex shrink-0 h-11 w-11 rounded-full backdrop-blur-lg border border-purple-500 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-purple-500 hover:bg-linear-to-tr hover:from-purple-500 hover:to-black/40 group relative overflow-hidden right-0">
      <div className=" inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      <Link to="/login" className="relative z-10 items-center flex justify-center w-full h-full">
      <HiOutlineUser className="text-white text-xl" />
      </Link>
    </div>


{/* Button empezemos */}
    <button className=" hidden md:flex relative shrink-0 bg-[#632ab4] text-white font-medium text-[17px] px-13 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
      <span className="mr-10">Empecemos</span>
  <div
    className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      width="24"
      height="24"
      className="w-[1.1em] transition-transform duration-300 text-[#632ab4] group-hover:translate-x-[0.1em]"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="currentColor"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
      ></path>
    </svg>
  </div>
</button>


  {(isOpen) && (
    <div className="md:hidden absolute top-20  right-0 mt-4 flex flex-col gap-4 bg-black/80 backdrop-blur-2xl p-6 rounded-2xl border border-purple-500 shadow-2xl">
  <Link
  to="/"
    className="text-white font font-medium hover:text-purple-500 py-2"
      onClick={() => setIsOpen(false)}
      >
        Inicio
    </Link>
    <Link
    to="/nosotros"
      className="text-white font font-medium hover:text-purple-500 py-2"
      onClick={() => setIsOpen(false)}
    >
      Nosotros
    </Link>
    <Link
    to="/contacto"
      className="text-white font font-medium hover:text-purple-500 py-2"
      onClick={() => setIsOpen(false)}
    >
      Contacto
    </Link>
    <Link
    to="/login"
      className="text-white font font-medium hover:text-purple-500 py-2"
      onClick={() => setIsOpen(false)}
    >
      Empecemos
    </Link>
  </div>)}

  {/* Menú Hamburgesa Mobile */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-white text-3xl md:hidden focus:outline-none"
      >
      {isOpen ? <HiX /> : <HiMenu/>}
    </button>

    </div>

    </nav>
  );
}

export default Navbar;
