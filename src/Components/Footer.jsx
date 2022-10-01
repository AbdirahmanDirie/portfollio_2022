const Footer = () => {
    return (
  
      <div className="bg-[#F20774] py-2 flex justify-center items-center">
        
        <div className="bg-white w-80 h-auto mt-3 mb-3 justify-center items-center">
          
          <form className="flex flex-col gap-6 justify-center items-center h-auto w-80 py-2 sm:px-3 s">

          <h1 className="text-xl font-semibold text-[#f20774] tracking-wider uppercase">contact us</h1>

              <input className="bg-white rounded-sm w-60 h-10 focus:outline-none px-2 text-md border-2 border-[#F20774] focus:bg-slate-200" placeholder="Email"/>

              <input className="bg-white rounded-sm w-60 h-10 focus:outline-none px-2 text-md border-2 border-[#F20774] focus:bg-slate-200" placeholder="Password"/>

              <textarea className="bg-white rounded-sm w-60 h-10 focus:outline-none px-2 text-md border-2 border-[#F20774] focus:bg-slate-200" rows="3"  placeholder="comment"></textarea>

              <button className="bg-[#f20774] px-8 py-3 text-white text-lg uppercase tracking-wider rounded-md hover:bg-white hover:shadow-2xl hover:text-[#f20774]">sumbit</button>

              
          </form>
      </div>


      </div>
  
    );
  }
  
  export default Footer;
  