import Hero from "./hero"
import Sign from "./signin"
import Ctc from "./ctc"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
  }
])
  return<>
 <RouterProvider router={router}/>
  </>
}

export default App