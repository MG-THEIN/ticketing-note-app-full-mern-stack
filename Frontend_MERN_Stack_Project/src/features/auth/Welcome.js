import { Link } from "react-router-dom"

const Welcome = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date)

  const content = (
    <section className="welcome">
      <p>{today}</p>
      <h1>WELCOME!</h1>
      <p>
        <Link to="/dash/notes">view notes</Link>
      </p>
      <p>
        <Link to="/dash/users">view User setting</Link>
      </p>
    </section>
  )

  return content
}

export default Welcome
