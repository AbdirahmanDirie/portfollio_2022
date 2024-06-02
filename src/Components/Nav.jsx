import React from 'react'

const Nav = () => {
  return (
    
        <div className='flex justify-between bg-[#F20774] shadow-lg sticky top-0 '>
            {/* logo */}
            <div className='text-2xl text-white tracking-widest font-bold uppercase ml-12 my-3'>dirie</div>


            {/* menu */}
            <div className='flex '>

              <div className='flex mr-24 text-white my-4'>
                  <p className='text-mD uppercase font-semibold mx-5 cursor-pointer'>home</p>
                <p className='text-mD uppercase font-semibold mx-5 cursor-pointer'>services</p>
                <p className='text-mD uppercase font-semibold mx-5 cursor-pointer'>About</p>
                <p className='text-mD uppercase font-semibold mx-5 cursor-pointer'>contact</p>
              </div>

              <div className='mr-5 my-2'>
              <button className='text-[#F20774] bg-white text-lg tracking-wider px-6 py-2 rounded-full uppercase font-semibold hover:bg-white hover:text-[#F20774] hover:shadow-md transition hover:duration-150 ease-in-out'>contact me</button>
              </div>
              
                
                
            </div>
        </div>
  )
}

export default Nav;