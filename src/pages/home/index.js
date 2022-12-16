import React,{useEffect, useState} from 'react'
import Nav from '../../components/navigation';
import axios from 'axios';


const Home = () => {

    const [data, setData] = useState();
    const getMovies=()=>{
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=c995baf8`)
        .then((res)=>{
            console.log(res);
            const moviedata= res.data
            setData(moviedata)
            
        })
    }
    console.log(data);
    useEffect(()=>getMovies(),[])
  return (
    <>
      <Nav />
      <section>
        <div
          className={`relative h-auto w-full flex  justify-center lg:justify-start text-center bg-cover bg-center  bg-hero  p`}
        >
          <div className="px-4 sm:px-6 lg:px-20 z-10 my-32">
            <div className="flex justify-center lg:justify-start">
              <h2 className="lg:text-8xl lg:w-1/3 md:w-1/2 w-full tracking-tight lg:text-left text-center leading-10 font-semibold sm:text-5xl text-white sm:leading-none text-3xl md:text-6xl ">
                Watch something Incredible
              </h2>
            </div>
          </div>
        </div>
      </section>
      <main className="mt-10 lg:px-20 px-5">
        <form>
          <div className="group relative w-full ">
            <label
              htmlFor="1"
              className="block w-full pb-1 text-lg font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
            >
              Search
            </label>
            <input
              id="1"
              type="text"
              className="peer h-10 w-full border border-black bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>
      </main>

      <section>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div>
                <h1 className='font-bold text-2xl pb-5'>{data?.Genre}</h1>
            </div>
         <div className="md:flex justify-between overlay-x-auto gap-10">
            <div>
          
            <div
              className="relative h-64 w-80 flex items-end justify-start text-left bg-cover bg-center"
              style={{backgroundImage: `url(${data?.Poster})`}} >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-20 flex justify-center items-center">
              <main className="p-5 z-10">
                <a
                  href="#2"
                  className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                >
                 {data?.Title}
                </a>
              </main>
                
              </div>
              
            </div>
</div>
<div>
          
          <div
            className="relative h-64 w-80 flex items-end justify-start text-left bg-cover bg-center"
            style={{backgroundImage: `url(${data?.Poster})`}} >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-20 flex justify-center items-center">
            <main className="p-5 z-10">
              <a
                href="#2"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
               {data?.Title}
              </a>
            </main>
              
            </div>
            
          </div>
</div>
<div>
          
          <div
            className="relative h-64 w-80 flex items-end justify-start text-left bg-cover bg-center"
            style={{backgroundImage: `url(${data?.Poster})`}} >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-20 flex justify-center items-center">
            <main className="p-5 z-10">
              <a
                href="#2"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
               {data?.Title}
              </a>
            </main>
              
            </div>
            
          </div>
</div>
          
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Home;