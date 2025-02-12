
import {Card} from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'

export const MovieList = ({apiPath, title}) => {
  
  const {data:movies} = useFetch(apiPath)

   useEffect(()=>{
        document.title= `${title} / CineMate`
      })

  return (
    <main>
          <section className='max-width-7xl mx-auto py-7'>
            <div className='flex justify-start flex-wrap other:justify-evenly'>
              {movies.map((movie)=>(<Card key={movie.id} movie={movie}/> ))} 
            </div>   
          </section>  
      </main>
  )
}


