import "./App.css"
import { Sidebar } from "./components/Sidebar"

const App = () => {
  /*const initialGeneralInfo = {
    name: "Jane Doe",
    address: "230 4th Av, Montreal, Qc",
    telephone: "8191234567",
    email: "janedoe@email.com",
    website: "janedoe.com",
  }*/

  return (
    <div className="page-wrapper">
      <Sidebar />
      <main>testMain</main>
    </div>
  )
}

export default App
