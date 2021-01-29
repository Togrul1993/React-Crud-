import EmployeeList from "./components/EmployeeList";
import CrudContextProvider from './context/CurdContext'

const App = () => {
  return (
    <div className="container p-3" style={{ "height": "70vh", "backgroundColor": "red" }}>
      <CrudContextProvider>
        <EmployeeList />
      </CrudContextProvider>
    </div>
  )
}

export default App
