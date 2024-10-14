import "../App.css"

const Submit = ({ onSubmit }) => {
  return (
    <div className="row">
      <button type="submit" className="submit" onSubmit={onSubmit}>
        Submit
      </button>
    </div>
  )
}

export { Submit }
