import { Badge, Sidebar } from "flowbite-react"
import { RxCross2 } from "react-icons/rx"
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi"
import { DialogDemo } from "../components/dropdown"
import { DropdownMenuDemo } from "../components/profile-dropdown-menu"
function MainSidebar() {
  return (
    <>
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white h-screen flex-shrink-0">
          <div className="">
            <Sidebar
              className="h-screen"
              aria-label="Sidebar with call to action button example "
            >
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    <p>Dashboard</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards}>
                    <p>Kanban</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiInbox}>
                    <p>Inbox</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                    <p>Users</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                    <p>Products</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    <p>Sign In</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiTable}>
                    <p>Sign Up</p>
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
              <Sidebar.CTA>
                <div className="mb-3 flex items-center">
                  <Badge color="warning">Beta</Badge>
                  <button
                    aria-label="Close"
                    className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                    type="button"
                  >
                    {/* <SeeSourceCodeForSVG /> */}
                    <RxCross2 />
                  </button>
                </div>
                <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                  <p>
                    Preview the new Flowbite dashboard navigation! You can turn
                    the new navigation off for a limited time in your profile.
                  </p>
                </div>
                <a
                  className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                  href="#"
                >
                  <p>Turn new navigation off</p>
                </a>
              </Sidebar.CTA>
            </Sidebar>
          </div>
        </aside>

        <div className="flex flex-col w-full">
          <header className="bg-blue-500 p-4">
            <h1 className="text-2xl font-bold text-white">Header</h1>
          </header>

          <main className="flex-grow p-4">
            <h2 className="text-xl font-semibold mb-4">Main Content</h2>
            <DialogDemo />
            <DropdownMenuDemo />
          </main>

          <footer className="bg-gray-300 p-4"></footer>
        </div>
      </div>
    </>
  )
}

export default MainSidebar
