'use client';
import React from 'react';
import InteractiveMenuIcon from "@/components/InteractiveMenuIcon";
import Image from "next/image";
import Sidebar from "./sidebar";
import { useState } from "react";
import CrossIcon from "./CrossIcon";
import { MyContext } from '@/app/Mycontext';
 
/**const Navbar = () => {
    const [isOpen, setIsOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const { data, setData } = React.useContext(MyContext);

  return (
    <>
        <header className="w-full flex justify-center h-[100px] items-center">
            <nav className="w-[96%] flex justify-between ">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={280}
                            height={70}
                            layout="fixed"
                            style={{ width: '304px', height: '63.2px' }}
                        />

                        <div className="w-[200px] flex  h-[100%] items-center justify-between bg-red-600" >
                            <div className=" w-[200px] flex  h-[100%] items-center justify-between group relative">
                                <h1 className=" mb-12 basic__subtitle-black"> 
                                            nos offres
                                    <span className="absolute bg-black bottom-12 h-0.5 left-0 w-0 group-hover:w-[75%] transition-all duration-200 ease-in-out"></span>
                                </h1>  
                            </div>
                          {
                            !isOpen?( <InteractiveMenuIcon isOpen={data} setIsOpen={setData} />):(
                                <CrossIcon isOpen={data} setIsOpen={setData} />

                            )

                          }

                        </div>
                                    
                    </nav>

        </header>  
     </>
    )
}

export default Navbar
 */
 
const Navbar = () => {
    const { data, setData } = React.useContext(MyContext);

  return (
    <>
        <header className="w-full flex justify-center h-[100px] items-center">
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
                    <div className=" w-[200px] flex  h-[100%] items-center justify-between group relative">
                        <h1 className="basic__subtitle-black"> 
                                            nos offres
                            <span className="absolute bg-black bottom-1 h-0.5 left-0 w-0 group-hover:w-[70%] transition-all duration-200 ease-in-out"></span>
                        </h1>  
                    </div>
                    {
                            !data?( <InteractiveMenuIcon isOpen={data} setIsOpen={setData} />):(
                                <CrossIcon isOpen={data} setIsOpen={setData} />

                            )

                    }                
                    </div>
                    
            </nav>

        </header>  
     </>
    )
}

export default Navbar
