import React from 'react'

function Header() {
  return (
    <div className="font-sans">
    
    <div className="sticky text-serif items-center">
        <div className="flex justify-between mb-5 items-center max-w-[1240px] mx-auto px-4">
        <h1 className="text-3xl text-white mt-3 animate-pulse">AdviceMe.</h1>
        </div>
   </div>  

        <div className="text-center m-10">
         <h1 className="mt-5 mb-3  text-3xl font-bold tracking-tighter text-center text-blue-800 title-font">We live by the best advices.</h1>
         <p className="text-2xl font-sans tracking-widest text-blue-500 title-font text-center">Get yours for the day.</p>           
        </div> 
  
    </div>
  )
}

export default Header