import React from 'react'

export const Card = () => {
  return (
    <div className="card w-74 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">8.9&#9733;</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className='btn btn-sm btn-primary mt-4'>Watch</button>
    </div>
  </div>
</div>
  )
}
