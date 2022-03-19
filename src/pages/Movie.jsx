import React, { useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'

export const Movie = ({movies}) => {

  const { id } = useParams()
  const navigate = useNavigate()

let movie = movies.filter(item => item.id === +id)[0]

if(!movie) return <button className='btn loading'></button>

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <div>
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <div className='badge badge-accent'>{movie.vote_average} &#9733;</div>
        </div>
        <div className='divider'></div>
        <h1 className='text-2xl font-bold mb-5 text-success'>About Film</h1>
        <ul className='mt-10 flex flex-col gap-3'>
            <li>Original Title:  <strong>{movie.original_title}</strong> </li>

            <li>Popularity:  <strong>{movie.popularity}</strong></li>
            <li>Votes:  <strong>{movie.vote_count}</strong></li>
            <li>Date:  <strong>{movie.release_date}</strong></li>
            <li>Language:  <strong>{movie.original_language}</strong></li>
        </ul>
        <div className="divider mt-10"></div>
        <p className='text-lg'>{movie.overview}</p>
        <button onClick={() => navigate(-1)} className='btn btn-info mt-10 text-lg shadow-md'>Go Back</button>
    </div>
  </div>
</div>
  )
}