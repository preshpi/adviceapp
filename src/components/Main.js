import React, { useEffect, useState , useRef} from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';

function Main() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState('true');
  const textRef = useRef();
  let colors = ['#ffff00', '#90ee90', '#ff68ff', '#a9a9et'];

  
  const fetchAdvice = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => {
      console.log('testing',res.slip.advice);
      setAdvice(res.slip.advice);
      setLoading(false);
    })
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  useEffect(()=> {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  }, [advice]);

  return (
    <div className="flex items-center justify-center m-8 h-80 font-serif">
        <div className='bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10'>
          <p ref={textRef}>{!loading ? advice: "Loading..."}</p>


          <div className="flex mt-5">
          <button className="shadow bg-blue-200 rounded text-blue-800 mx-3 px-1 py-1 hover:bg-green-600" onClick={()=> {
            fetchAdvice()
          }}>More Advice</button>
          <div className="shadow flex text-blue-200 rounded bg-blue-700 py-1 px-1 ">
            <AiFillTwitterCircle className="mt-1 mx-2"/>
          <a href={`https://twitter.com/intent/tweet?text=${advice}`}
          className="hover:animate-bounce"
          target='_blank'
          rel="noopener noreferrer">
            Tweet
          </a>                
          </div>
 
          </div>
   
      
          </div>  
    </div>

  )
}

export default Main