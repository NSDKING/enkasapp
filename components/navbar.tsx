'use client';
import InteractiveMenuIcon from "@/components/InteractiveMenuIcon";
import Image from "next/image";
import Sidebar from "./sidebar";
import { useState } from "react";
 
 
const Navbar = () => {
    const [isOpen, setIsOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  return (
    <>
        <header className={isOpen?"hidden":"w-full flex justify-center h-[100px] items-center"}>
            <nav className="w-[96%] flex justify-between ">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={280}
                    height={70}
                    layout="fixed"
                    style={{ width: '304px', height: '63.2px' }}
                />
                <div className="w-[200px] flex  h-[100%] items-center justify-between " >
                    <h1 className=" basic__subtitle ">nos offres</h1>  
                    <InteractiveMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                    
            </nav>

        </header>  
        {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
    )
}

export default Navbar
