import React from 'react'
import {Card} from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router'
import { useEffect } from 'react'

export const Search = ({apiPath}) => {
  const [searchParams] =useSearchParams()
  const queryTerm=searchParams.get("q")
  
  const {data:movies} = useFetch(apiPath, queryTerm)

   useEffect(()=>{
        document.title= `Search Result for ${queryTerm} / CineMate`
      })


  return (
    <main>
    <section>
      <p className='text-3xl text-gray-700 dark:text-white'>{movies.length===0 ? `No result found for ${queryTerm}`: `Result term '${queryTerm}'`}</p>
    </section>
      

    <section className='max-width-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap '>
        {movies.map((movie)=>(<Card key={movie.id} movie={movie}/> ))}
        
      </div>   
    </section>
  
</main>
  )
}

