import { useState } from "react"
import "./App.css"
import { Display } from "./components/Display"
import { Sidebar } from "./components/Sidebar"

const App = () => {
  const [fName, setFName] = useState("John")
  const [lName, setLName] = useState("Doe")
  const [address, setAddress] = useState("Montreal, QC, Canada")
  const [phone, setPhone] = useState("5141234567")
  const [email, setEmail] = useState("johnDoe@gmail.com")
  const [website, setWebsite] = useState("johnDoe.com")

  const onChangeFName = (e) => {
    setFName(e.target.value)
  }
  const onChangeLName = (e) => {
    setLName(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const onChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeWebsite = (e) => {
    setWebsite(e.target.value)
  }

  return (
    <div className="page-wrapper">
      <Sidebar
        onChangeFName={onChangeFName}
        onChangeLName={onChangeLName}
        onChangeAddress={onChangeAddress}
        onChangePhone={onChangePhone}
        onChangeEmail={onChangeEmail}
        onChangeWebsite={onChangeWebsite}
      />
      <Display
        fName={fName}
        lName={lName}
        address={address}
        phone={phone}
        email={email}
        website={website}
      />
    </div>
  )
}

export default App
