'use client';
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { MyContext } from "@/app/Mycontext";
import Navbar from "./navbar";

 
const MenuVars = {
    initial: {
      scaleX: -1,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: -1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  

const Sidebar = () => {
    const { data, setData } = React.useContext(MyContext);
    
    return (
        
        <AnimatePresence mode="wait" initial={false}>
          
                {     
                data &&(         
                    <>
                    <motion.div
                        {...framerSidebarBackground}
                        aria-hidden="true"
                     ></motion.div>
                    <motion.aside
                        {...framerSidebarPanel}
                    >            
                        <main className="bg-[#D1C1C1] w-full pt-[20px] h-screen flex flex-col items-center mt-[-20px]">
                        
                                    <Navbar/>

                                    <div className="w-full flex justify-around mt-[100px]">
                                        <div className='w-[80%] flex justify-center border-r-2 border-[#9E9E9E] rounded-sm'>
                                            <div className='w-[354px] h-[222px]'>
                                            <h1 className='group cursor-pointer relative text-black hover:text-white px-2 py-1 z-10'>
                                                <span className="absolute inset-0 bg-black rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out z-0"></span>
                                                <span className='relative z-10 basic__midtitle'>Our expertise</span>
                                            </h1>

                                            <h1 className='group cursor-pointer relative text-black hover:text-white px-2 py-1 z-10'>
                                                <span className="absolute inset-0 bg-black rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out z-0"></span>
                                                <span className='relative z-10 basic__midtitle'>who we are</span>
                                            </h1>

                                            <h1 className='group cursor-pointer relative text-black hover:text-white px-2 py-1 z-10'>
                                                <span className="absolute inset-0 bg-black rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out z-0"></span>
                                                <span className='relative z-10 basic__midtitle'>contact</span>
                                            </h1>

                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center '>
                                            <div className="w-[55%] flex flex-col justify-around  h-[350px]">
                                                <div className="bg-black w-[310px] h-[55px] flex justify-center rounded-sm">
                                                    <h1 className="text-[30px] text-white font-kaisei font-bold rounded-[10px] ">
                                                        Entrons en contact:
                                                    </h1>
                                                </div>
                                                <p className="text-[23px] font-kaisei text-[#494949] ">Pour rester informé de manière régulière sur notre entreprise et nos activités, abonnez-vous à notre newsletter.</p>
                                                <div className="w-[394px] h-[35px] border-b-2 border-[#929292] flex justify-center items-center">
                                                    <input
                                                        placeholder="mail ou numero de téléphone"
                                                        className="bg-transparent focus:outline-none w-[90%] ml-3 h-full font-kaisei text-[20px] text-[#606060]"
                                                    />
                                                    <button className="bg-[#1E1E1E] w-[62px] h-[28px] text-white font-karla text-[12px] rounded-sm">
                                                        JOIN
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                            
                                </main>

                        </motion.aside>
                    </>           

                        )

                
                }      

    </AnimatePresence>


    )
}

export default Sidebar
 

const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  }

const framerSidebarPanel = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.3 },
  }