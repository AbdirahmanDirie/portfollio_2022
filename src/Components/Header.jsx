import React from 'react'

const Header = () => {
  return (
    <div className='mx-10'>

        <div className='bg-white shadow-2xl rounded-lg grid lg:grid-cols-2 justify-center xl:grid-cols-2 md:grid items-center  my-12 px-6 py-5'>

            {/* text */}
            <div className='items-center flex xl:items-start 2xl:items-start lg:items-start flex-col mt-10 mx-7 py-3'>
                <h1 className='text-[#F20774] text-2xl font-bold uppercase tracking-widest'>Abdirahman Dirie</h1>
                <p className='text-sm capitalize mt-4 mb-1 md:text-md lg:text-2xl 2xl:text-2xl tracking-wider'>I'm dirie, full stack developer, and ui ux designer.</p>
                <button className='bg-[#F20774] text-white text-lg tracking-wider px-6 py-2 rounded-full uppercase font-semibold mt-5 hover:bg-white hover:text-[#F20774] hover:shadow-md transition hover:duration-150 ease-in-out'>Hire me</button>
            </div>


            {/* image */}
            <div className='flex justify-center items-center sm:mt-12 mt-10' >

                <img src={require('../img/dirie.png')} className="w-96 h-auto" alt='test' />
                
            </div>
        </div>
       
    </div>
  )
}

export default Header;