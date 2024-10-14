import { Education } from "./Education"
import { GeneralInfo } from "./GeneralInfo"
import "../App.css"
import { Experience } from "./Experience"

const Sidebar = ({
  onChangeFName,
  onChangeLName,
  onChangeAddress,
  onChangePhone,
  onChangeEmail,
  onChangeWebsite,
}) => {
  return (
    <aside>
      <GeneralInfo
        onChangeFName={onChangeFName}
        onChangeLName={onChangeLName}
        onChangeAddress={onChangeAddress}
        onChangePhone={onChangePhone}
        onChangeEmail={onChangeEmail}
        onChangeWebsite={onChangeWebsite}
      />
      <Education />
      <Experience />
    </aside>
  )
}

export { Sidebar }
