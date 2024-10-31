import Hero from "./hero"
import Sign from "./signin"
import Ctc from "./ctc"
import Dashboard from "./dashbord"
import Page from "./app/dashboard/page"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
function App(){
  const router=createBrowserRouter([{
    path:"/",
    element:<>
      <Hero /><Ctc />
    </>
  },
  {
    path:"/sign-in",
    element: <Sign />
  },
  {
    path:"/sign-in/dash-board",
    element:<>
      <Dashboard />
      <Page />
    </>
  }
])
  return<>
 <RouterProvider router={router}/>
  </>
}

export default App