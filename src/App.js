import './styles/index.css'
import Employees from './components/employee'

function App() {
  console.log('We are going to list all the emplyees here')
  {
    const hasAuth = true
    return hasAuth ? (
      <>
        <Employees />
        <Employees />
        <Employees />
        <Employees />
        <Employees />
        <Employees />
      </>
    ) : (
      <h1>No Employees to show</h1>
    )
  }
}

export default App
