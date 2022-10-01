import { CodeIcon, AdjustmentsIcon, BriefcaseIcon} from '@heroicons/react/outline'

const ShowCase = () => {
  return (

    <div className='mx-10 mt-20'>
        
       <div className="flex items-center flex-col px-8">
           <h1 className="text-xl font-bold text-[#F20774] uppercase tracking-wider mt-4 mb-5">what i do</h1>
        <p className="text-lg tracking-wide">We Prepared For You Quality Services Those Will Improve The Value Of Your Business.</p>
       </div> 

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">

           <div className="bg-white shadow-lg mx-3 flex items-center flex-col px-10 rounded-md mb-3 py-5 hover:bg-[#F20774] hover:text-white transition ease-in-out hover:-translate-y-1 duration-300">
               <CodeIcon  className='w-32 h-auto'/>
                  <h2 className="text-lg tracking-wide uppercase font-semibold mt-5 mb-2">web development</h2>
           <p className="text-md tracking-wide mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium corrupti</p>
            </div>
           <div className="shadow-lg mx-3 flex items-center flex-col px-10 rounded-md mb-3 py-5 bg-[#F20774] text-white">
               <AdjustmentsIcon  className='w-32 h-auto'/>
                  <h2 className="text-lg tracking-wide uppercase font-semibold mt-5 mb-2">ui ux design</h2>
           <p className="text-md tracking-wide mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium corrupti</p>
            </div>
           <div className="bg-white shadow-lg mx-3 flex items-center flex-col px-10 rounded-md mb-3 py-5 hover:bg-[#F20774] hover:text-white transition ease-in-out hover:-translate-y-1 duration-300">
               <BriefcaseIcon  className='w-32 h-auto'/>
                  <h2 className="text-lg tracking-wide uppercase font-semibold mt-5 mb-2">Digital marketing</h2>
           <p className="text-md tracking-wide mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium corrupti</p>
            </div>
        
        </div>
        
    <div>

    </div>
    </div>

  );
}

export default ShowCase;