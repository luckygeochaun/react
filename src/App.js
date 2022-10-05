import './styles/index.css'
import Employees from './components/employee'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [role, setRole] = useState('Dev')
  const [employees, setEmployees] = useState([
    {
      name: 'Caleb',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg',
    },
    {
      name: 'Timothy',
      role: 'Founder',
      img: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg',
    },
    {
      name: 'Tara',
      role: 'Co-Founder',
      img: 'https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg',
    },
  ])
  const hasAuth = true
  return (
    <div className='App'>
      {hasAuth ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employees
                  key={uuidv4()} // Creates a unique id for each displayed employee
                  name={employee.name} // Displays name
                  role={employee.role} // Displays role
                  img={employee.img} // Displays employee image
                />
              )
            })}
          </div>
        </>
      ) : (
        <h1>No Employees to show</h1>
      )}
    </div>
  )
}

export default App
