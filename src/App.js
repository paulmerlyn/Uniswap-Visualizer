import React from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import ErrorBoundary from "./components/ErrorBoundary"
function App() {
  return (
    <div className="App">
      <main>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
