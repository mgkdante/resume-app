import { SideRow, SideRowTextArea } from "./SideRow"
import { Submit } from "./Submit"

const Experience = () => {
  return (
    <section className="side-container">
      <SideRow
        label={"Company:"}
        id={"company"}
        placeholder={"Company your worked for"}
        type={"text"}
      />
      <SideRow
        label={"Role:"}
        id={"role"}
        placeholder={"Your role"}
        type={"text"}
      />
      <SideRow
        label={"Start Date:"}
        id={"start-date-experince"}
        placeholder={"Enter date you started"}
        type={"date"}
      />
      <SideRow
        label={"Finish Date:"}
        id={"finish-date-experience"}
        placeholder={"Enter date you finished"}
        type={"date"}
      />
      <SideRowTextArea label={"Description: "} />
      <Submit />
    </section>
  )
}

export { Experience }
