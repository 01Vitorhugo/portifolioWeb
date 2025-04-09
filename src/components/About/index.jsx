import ImageVitor from "../../assets/vitor.jpeg";


export default function About() {

    return (
        <section className="h-[90%] w-[95%] overflow-hidden rounded-lg bg-navbar">
    
            <section className="w-full h-full  flex ">
                <figure className="w-[25%] h-full">
                    <img className="h-full w-full" src={ImageVitor} alt="Imagem Vitor Hugo" />
                </figure>

                <section className="w-[75%] ">
                    <div className="container  h-20 flex  items-center pl-5">
                        <h1 className=" text-text text-3xl">Olá, me chamo Vitor Hugo</h1>
                    </div>
                </section>

            </section>
        </section>
    )
}