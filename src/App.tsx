import { Link } from "react-router-dom"
import "./App.css"
import { Spinner, Button } from "flowbite-react"
import { Badge, Sidebar } from "flowbite-react"
import Layout from "./Layout/dashboard/Layout"
// import Layout from "./Layout/Layout"

function App() {
  return (
    <>
      <Layout />
      {/* <div>
        <Link to="/new">Link</Link>
        <Button color="gray">Gray</Button>
      </div>
      <Button>
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button> */}
    </>
  )
}

export default App
