import Logo from "../../../public/codigo.png"
import React, { useContext } from 'react';
import { ContextApi } from "../../Context/contextApi";
export default function navbar() {

    const { ValeuMenu, setValueMenu } = useContext(ContextApi);

    const handleMenuChange = (valor) => {
        setValueMenu(valor);
    };



    return (
        <nav className="w-full h-[100px] flex p-5">
            <section className="w-full flex justify-left items-center bg-navbar rounded-lg">

                <div className="w-[50%] h-full flex items-center gap-3">
                    <img className="h-15 ml-5" src={Logo} alt="logo desenvolvedor" />
                    <h1 className="text-[30px] text-text">Vitor Hugo</h1>
                </div>

                <div className="w-[50%] h-full text-text pr-5 ">
                    <ul className="w-full h-full flex justify-end items-center gap-10">

                        <li className="hover:border-b-1 border-text hover:transition delay-150 duration-150 ease-in">
                            <button onClick={() => handleMenuChange(2)} className="cursor-pointer">Sobre mim</button>
                        </li>

                        <li className="hover:border-b-1 border-text hover:transition delay-150 duration-150 ease-in">
                            <button onClick={() => handleMenuChange(1)} className="cursor-pointer">Projetos</button>
                        </li>

                        <li className="hover:border-b-1 border-text hover:transition delay-150 duration-150 ease-in">
                            <button onClick={() => handleMenuChange(3)} className="cursor-pointer">Contato</button>
                        </li>
                    </ul>
                </div>

            </section>
        </nav>
    )
}