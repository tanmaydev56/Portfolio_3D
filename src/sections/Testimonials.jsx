import React from 'react'
import { clientReviews } from '../constants'

const Testimonials = () => {
  return (
    <section className='c-space lg:my-[60px] my-[150px] h-screen w-full lg:translate-y-[200px] translate-y-[1600px] ' >
        <h3 className='sm:text-4xl text-3xl font-semibold text-gray_gradient'> Hear from my clients</h3>
        <div className='client-container'>
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      
    </section>
  )
}

export default Testimonials
