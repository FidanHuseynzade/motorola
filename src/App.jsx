import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./Routes"

function App() {
  const router = createBrowserRouter(ROUTES)
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
