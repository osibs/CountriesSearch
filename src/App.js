import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Fetchdata from "./fetchdata";
import "./App.css";
import Searchbar from "./searchbar";
import Currency from "./currency";
import Language from "./language";
import Capitalcity from "./capital";
import Navbar from "./navbar";
import Navlinks from "./NavLinks";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Navlinks/> ,
    children: [
      {
        index:true,
        element: <Fetchdata />
      },
      {
        path: "/links",
        element: <div> This is links Page </div>
      },
      {
        path: "/currency",
        element: <div> <Currency/> </div>
      },
      {
        path: "/language",
        element: <div> <Language/> </div>,
        errorElement: <div> Page not found </div>
      },
      {
        path: "/capitalcity",
        element: <div> <Capitalcity/> </div>,
        errorElement: <div> Page not found </div>
      },
    ]
  }
 
])

const App = () => {
  return ( 
    <div> 
      {/* <Navbar /> */}
      
      
<RouterProvider router={router} />
    </div>
   );
}
 
export default App;