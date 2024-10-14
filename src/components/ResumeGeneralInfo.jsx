const ResumeGeneralInfo = ({
  fName,
  lName,
  address,
  phone,
  email,
  website,
}) => {
  return (
    <main>
      <h2>
        {fName} {lName}
      </h2>
      <h3>
        {address} | {phone} | {email} {website ? "| https://" : ""}
        {website}
      </h3>
    </main>
  )
}

export { ResumeGeneralInfo }
