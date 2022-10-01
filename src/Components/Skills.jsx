import { CodeIcon,BriefcaseIcon, DeviceMobileIcon, AdjustmentsIcon } from '@heroicons/react/outline'
const Skills = () => {
    return (
  
      <div className=" mx-10 mb-20 flex flex-col justify-center items-center">
          <h1 className='text-3xl text-[#F20774] font-semibold tracking-widest uppercase'>Skills</h1>
          <div className=" grid gap-2 justify-center items-center lg:grid-cols-4 mt-6 uppercase md:grid-cols-2 md:gap-5">

            {/* card */}
            <div className='bg-white w-50 h-35 flex justify-between items-center py-5 rounded-md shadow-sm hover:shadow-2xl'>
            <div className='px-3 py-1'><CodeIcon className='w-20 h-20 text-[#F20774]' /></div>

            <div className='px-10 py-1'>
                <p className='text-lg tracking-widest capitalize font-bold items-center flex justify-center'>web development</p>
                <p className='bg-[#F20774] items-center flex justify-center rounded-full text-white text-md px-5 py-0.5 tracking-wider'>expert</p>
            </div>

            </div>
            {/* card */}
            <div className='bg-white w-50 h-35 flex justify-between items-center py-5 rounded-md shadow-sm hover:shadow-2xl'>
            <div className='px-3 py-1'><BriefcaseIcon className='w-20 h-20 text-[#F20774]' /></div>

            <div className='px-10 py-1'>
                <p className='text-lg tracking-widest capitalize font-bold items-center flex justify-center'>digital marketing</p>
                <p className='bg-[#F20774] items-center flex justify-center rounded-full text-white text-md px-5 py-0.5 tracking-wider'>intermediate</p>
            </div>

            </div>
            {/* card */}
            <div className='bg-white w-50 h-35 flex justify-between items-center py-5 rounded-md shadow-sm hover:shadow-2xl'>
            <div className='px-3 py-1'><DeviceMobileIcon className='w-20 h-20 text-[#F20774]' /></div>

            <div className='px-10 py-1'>
                <p className='text-lg tracking-widest capitalize font-bold items-center flex justify-center'>app developmen</p>
                <p className='bg-[#F20774] items-center flex justify-center rounded-full text-white text-md px-5 py-0.5 tracking-wider'>beginner</p>
            </div>

            </div>

            {/* card */}
            <div className='bg-white w-50 h-35 flex justify-between items-center py-5 rounded-md shadow-sm hover:shadow-2xl'>
            <div className='px-3 py-1'><AdjustmentsIcon className='w-20 h-20 text-[#F20774]' /></div>

            <div className='px-10 py-1'>
                <p className='text-lg tracking-widest capitalize font-bold items-center flex justify-center'>ui ux designer</p>
                <p className='bg-[#F20774] items-center flex justify-center rounded-full text-white text-md px-5 py-0.5 tracking-wider'>expert</p>
            </div>

            </div>


          </div>
      </div>
       
  
    );
  }
  
  export default Skills;