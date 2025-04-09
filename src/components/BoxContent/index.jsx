import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import { ContextApi } from "../../Context/contextApi";
import { useContext } from "react";



export default function BoxContent() {

    const { ValueMenu } = useContext(ContextApi);

    return (
        <div className="content h-200 w-[100%]  flex pl-5 items-center">

            {ValueMenu == 0 &&

                <section className="h-[90%] w-[90%]  ">
                    <h1 className=" text-text text-center text-4xl">Vitor Hugo</h1>

                </section>
            }

            {ValueMenu == 1 && <Projects />}
            {ValueMenu == 2 && <About />}
            {ValueMenu == 3 && <Contact />}



        </div>
    )
}