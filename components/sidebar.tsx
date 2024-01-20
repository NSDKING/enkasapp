import Image from "next/image";

const Sidebar = () => {
    return (
        <main className='bg-[#D1C1C1] w-full' >
            <nav className="w-[96%] flex justify-between ">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={280}
                    height={70}
                />
                <div className="w-[200px] flex  h-[100%] items-center justify-between " >
                    <h1 className=" basic__subtitle ">nos offres</h1>  
                 </div>
                    
            </nav>
            <div className='w-[50%]'>
                <div className='w-[354px] h-[222px]'>
                    <h1 className='basic__midtitle'>Our expertise </h1>
                    <h1 className='basic__midtitle'>who we are </h1>
                    <h1 className='basic__midtitle'>contact</h1>
                </div>
            </div>
            <div className=''>

            </div>
    
        </main>
    )
}

export default Sidebar
 