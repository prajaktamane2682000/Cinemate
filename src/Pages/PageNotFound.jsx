import React, { useEffect } from 'react'
import PageNotFoundImage from '../assets/pagenotfound.png'
import {Link} from 'react-router-dom'
import  {Button}  from '../components'
export const PageNotFound = () => {
  useEffect(()=>{
    document.title= `Page Not Found / CineMate`
  })


  return (
    <main>
      <section className='flex flex-col justify-center'>
          <div className='flex flex-col items-center my-4'>
              <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, OOPS!!!</p>
              <div className='max-w-lg'>
                 <img  src={PageNotFoundImage} alt="Page Not Found Image" />

              </div>
              
          </div>
          <div className='flex justify-center my-4'>
            <Link to ="/">
              <Button >Back to Home</Button>
            </Link>
          </div>
      </section>
      
    </main>
  )
}


