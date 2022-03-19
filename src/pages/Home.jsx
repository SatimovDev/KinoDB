import React from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'


export const Home = ({movies}) => {
  return (
    <div>
        <Navbar/>
        <div className="container w-4/6 mx-auto mt-10 grid grid-cols-4 gap-10">
           {movies.length === 0 ? <button className='btn loading'></button>
            : movies.map((item , index) => {
              return <Card key={index} item={item} />
            }) 
          } 
        </div>
    </div>
  )
}
