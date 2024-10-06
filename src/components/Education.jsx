import "../App.css"
import { SideRow } from "./SideRow"
import { Submit } from "./Submit"

const Education = () => {
  return (
    <section className="side-container">
      <SideRow
        label={"Intitution:"}
        id={"institution"}
        placeholder={"Enter Institution"}
        type={"text"}
      />
      <SideRow
        label={"Degree:"}
        id={"degree"}
        placeholder={"Enter Degree"}
        type={"text"}
      />
      <SideRow
        label={"Start Date:"}
        id={"start-date"}
        placeholder={"Enter date you started"}
        type={"date"}
      />
      <SideRow
        label={"Finish Date:"}
        id={"finish-date"}
        placeholder={"Enter date you finished"}
        type={"date"}
      />
      <Submit />
    </section>
  )
}

export { Education }
