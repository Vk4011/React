import React from 'react'
import Home from './Components/Home'
import LineChart   from './Components/LineChart';


function App() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <div>
      <Home/>
      <LineChart/>
    </div>
  )
}

export default App
