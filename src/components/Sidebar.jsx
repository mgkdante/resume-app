import { Education } from "./Education"
import { GeneralInfo } from "./GeneralInfo"
import "../App.css"
import { Experience } from "./Experience"

const Sidebar = () => {
  return (
    <aside>
      <GeneralInfo />
      <Education />
      <Experience />
    </aside>
  )
}

export { Sidebar }
