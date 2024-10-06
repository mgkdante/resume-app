import "../App.css"

const SideRow = ({ label, id, placeholder, type }) => {
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="col-75">
        <input type={type} id={id} name={id} placeholder={placeholder} />
      </div>
    </div>
  )
}

const SideRowTextArea = ({ label, id, placeholder }) => {
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="col-75">
        <textarea id={id} name={id} placeholder={placeholder} />
      </div>
    </div>
  )
}

export { SideRow, SideRowTextArea }
