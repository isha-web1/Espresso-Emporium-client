
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-purple-600 font-semibold text-center'>Best Coffee Ever</h1>
      <div className='grid md: grid-cols-2 gap-4 mt-6'>
      {
        loadedCoffees.map(coffee => <CoffeeCard key={coffee._id} 
          coffees={coffees}
          setCoffees={setCoffees}
          coffee={coffee}></CoffeeCard>)
      }
      </div>
     
    </div>
  )
}

export default App
