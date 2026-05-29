import React from 'react'
import { SectionHeading } from '../../Helper/SectionHeading'
import { WhyChooseCard } from './WhyChooseCard'

export const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
      {/* section heading */}
      <SectionHeading heading='Why Choose Us'/>
      <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
        {/* why choose card */}
        <div>
          <WhyChooseCard image='/images/ser1.png' title='Best Price Guarantee'
          description='We provide the best prices for your trips.'/>
        </div>
        <div>
          <WhyChooseCard image='/images/ser2.png' title='Easy & Quick Booking'
          description='Book your destination in just a few clicks.'/>
        </div>
        <div>
          <WhyChooseCard image='/images/ser3.png' title='Customer Care 24/7'
          description='Our support team is available all day.'/>
        </div>
      </div>
    </div>
  )
}
