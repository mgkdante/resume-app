import "../App.css"
import { SideRow } from "./SideRow"

const GeneralInfo = ({
  onChangeFName,
  onChangeLName,
  onChangeAddress,
  onChangePhone,
  onChangeEmail,
  onChangeWebsite,
}) => {
  return (
    <section className="side-container">
      <form>
        <SideRow
          label={"First Name:"}
          id={"fname"}
          placeHolder={"Your First Name"}
          type={"text"}
          onChange={onChangeFName}
        />
        <SideRow
          label={"Last Name:"}
          id={"lname"}
          placeHolder={"Your Last Name"}
          type={"text"}
          onChange={onChangeLName}
        />
        <SideRow
          label={"Address:"}
          id={"address"}
          placeHolder={"Your Home Address"}
          type={"text"}
          onChange={onChangeAddress}
        />
        <SideRow
          label={"Phone Number:"}
          id={"telephone"}
          placeHolder={"Your Phone Number"}
          type={"tel"}
          onChange={onChangePhone}
        />
        <SideRow
          label={"Email:"}
          id={"email"}
          placeHolder={"Your Email Address"}
          type={"email"}
          onChange={onChangeEmail}
        />
        <SideRow
          label={"Website:"}
          id={"wesbite"}
          placeHolder={"Your webiste"}
          type={"url"}
          onChange={onChangeWebsite}
        />
      </form>
    </section>
  )
}

export { GeneralInfo }
