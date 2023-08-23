import { Button } from "../components/ui/button"
import Sidebar from "./Sidebar"

function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Button variant="destructive">button</Button>
      </div>
    </>
  )
}

export default Layout
