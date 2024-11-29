
'use client'
import { Doughnut } from 'react-chartjs-2';


import React from 'react'
import {Chart as ChartJS, ArcElement,Tooltip} from 'chart.js'
ChartJS.register(ArcElement,Tooltip)

const DoughnautChart = ({accounts}:DoughnutChartProps) => {
      const accountNames=accounts.map(a=>a.name)
      const balances=accounts.map(a=>a.currentBalance)

  const data = {

      datasets:[
            {
                  label:'Banks',
                  data:[200,500,300],
                  backgroundColor:['#0747b6' ,'#2265d8','#2f91fa']

            }
      ],
      labels:accountNames
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