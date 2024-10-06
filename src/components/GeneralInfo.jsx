import "../App.css"
import { SideRow } from "./SideRow"

const GeneralInfo = () => {
  return (
    <section className="side-container">
      <SideRow
        label={"First Name:"}
        id={"fname"}
        placeHolder={"Your First Name"}
        type={"text"}
      />
      <SideRow
        label={"Last Name:"}
        id={"lname"}
        placeHolder={"Your Last Name"}
        type={"text"}
      />
      <SideRow
        label={"Address:"}
        id={"address"}
        placeHolder={"Your Home Address"}
        type={"text"}
      />
      <SideRow
        label={"Phone Number:"}
        id={"telephone"}
        placeHolder={"Your Phone Number"}
        type={"tel"}
      />
      <SideRow
        label={"Email:"}
        id={"email"}
        placeHolder={"Your Email Address"}
        type={"email"}
      />
    </section>
  )
}

export { GeneralInfo }
