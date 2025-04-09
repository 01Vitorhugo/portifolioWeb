import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";

export default function NavBarRigth() {


    return (
        <aside className=" w-[60px] h-[170px] bg-navbar absolute bottom-160 right-5 rounded-lg border-2 border-text ">

            <figure className="w-full h-[50%] flex justify-center items-center ">
                <img className="h-8" src={github} alt="github" />
            </figure>

            <figure className="w-full h-[50%] flex justify-center items-center">
                <img className="h-8" src={linkedin} alt="linkedin" />
            </figure>

        </aside>
    )
}