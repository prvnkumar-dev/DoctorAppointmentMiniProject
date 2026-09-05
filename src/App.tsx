import { Outlet } from "react-router"

const App = () => {
  const dummyUrl = import.meta.env.VITE_DUMMY_URL
  return <>
    <h1>helloo from {dummyUrl}</h1>
    <Outlet />
  </>
}
export default App