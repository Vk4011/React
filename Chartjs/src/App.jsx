import React from "react";
import { Bar } from "chart.js";
// import { Chart } from "chart.js/dist";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement
)

const labels = ['Jan','Feb','Mar','Apr','Jun']

const options={
  plugins:{
    legend:{
      positon:'top'
    },
    title:{
      display: true,
      text:"Expense Tracker"
    }
  }
}

const data={
  labels,
  datasets : [
    {
      lable: "2020 Expense",
      data:[10000,9000,8000,10250,20250],
      backgroundColor: 'pink'
    },
    {
      lable: "2021 Expense",
      data:[20000,22000,25000,30000,15000],
      backgroundColor: 'black'

    }
  ]

}


function App(){
  return(
    <>
    <Bar data/>
    </>
  )
}