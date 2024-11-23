
'use client'
import { Doughnut } from 'react-chartjs-2';


import React from 'react'
import {Chart as ChartJS, ArcElement,Tooltip} from 'chart.js'
ChartJS.register(ArcElement,Tooltip)

const DoughnautChart = ({accounts}:DoughnutChartProps) => {

  const data = {

      datasets:[
            {
                  label:'Banks',
                  data:[1253,342,1231],
                  backgroundColor:['#0747b6' ,'#2265d8','#2f91fa']

            }
      ],
      labels:['Bank 1','Bank 2', 'Bank 3']
  }


  return (
      <Doughnut data={data} 
      options={{
            cutout:'65%'
      }}
      />
  )
}

export default DoughnautChart