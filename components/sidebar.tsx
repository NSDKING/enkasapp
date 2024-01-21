import Image from "next/image";

const Sidebar = () => {
    return (
        <main className='bg-[#D1C1C1] w-full h-screen flex flex-col items-center ' >
            <nav className="w-[90%] flex justify-between ">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={280}
                    height={70}
                />
                <div className="w-[200px] flex  h-[100%] items-center justify-between group relative" >
                    <h1 className=" basic__subtitle ">
                        nos offres

                     </h1>  


                 </div>
                    
            </nav>

            <div className="w-full flex justify-around mt-[100px]">
                <div className='w-[80%] flex justify-center border-r-2 border-[#9E9E9E] rounded-sm'>
                    <div className='w-[354px] h-[222px]'>
                        <h1 className='basic__midtitle'>Our expertise </h1>
                        <h1 className='basic__midtitle'>who we are </h1>
                        <h1 className='basic__midtitle'>contact</h1>
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
    )
}

export default Sidebar
 