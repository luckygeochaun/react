import './styles/index.css'
import Employees from './components/employee'
import { useState } from 'react'

function App() {
  const [role, setRole] = useState('Dev')
  {
    const hasAuth = true
    return hasAuth ? (
      <>
        <input
          type='text'
          onChange={(e) => {
            setRole(e.target.value)
          }}
        />
        <Employees name='Caleb' role='Intern' />
        <Employees name='Timothy' role={role} />
        <Employees name='Tara' />
      </>
    ) : (
      <h1>No Employees to show</h1>
    )
  }
}

export default App
