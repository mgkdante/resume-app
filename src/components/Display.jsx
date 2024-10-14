import { ResumeGeneralInfo } from "./ResumeGeneralInfo"

const Display = ({ fName, lName, address, phone, email, website }) => {
  return (
    <ResumeGeneralInfo
      fName={fName}
      lName={lName}
      address={address}
      phone={phone}
      email={email}
      website={website}
    ></ResumeGeneralInfo>
  )
}

export { Display }
