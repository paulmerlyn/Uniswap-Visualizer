import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

// <Outlet /> is used in parent route element to render its child route elements. This allows nested UI to show up when child routes are rendered.
const Root = () => {
  return (
    <>
      <Header location />
      <Outlet />
    </>
  )
}

export default Root
