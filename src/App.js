import './styles/index.css'
import Employees from './components/employee'

function App() {
  {
    const hasAuth = true
    return hasAuth ? (
      <>
        <input
          type='text'
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
        <Employees name='Caleb' role='Intern' />
        <Employees name='Timothy' role='Owner' />
        <Employees name='Tara' role='Owner Wife' />
      </>
    ) : (
      <h1>No Employees to show</h1>
    )
  }
}

export default App
