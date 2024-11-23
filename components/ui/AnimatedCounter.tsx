import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
      
      <div>

      <CountUp end={amount}
       duration={3}
       decimal=','
       prefix='$'
       />

            </div>
  )
}

export default AnimatedCounter