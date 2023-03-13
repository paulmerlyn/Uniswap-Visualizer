import { createBrowserRouter } from "react-router-dom"
import Root from "./views/Root"
import Error from "./views/Error"
import TopPools from "./views/TopPools"
import Tokens from "./views/Tokens"
import TvlVol from "./views/TvlVol"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <TopPools /> },
      { path: "pools", element: <TopPools /> },
      { path: "tokens", element: <Tokens /> },
      { path: "tvlvol", element: <TvlVol /> },
    ],
  },
])

export default router
