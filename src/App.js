import React from 'react'
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
 import Header from './components/Header';
import RestaurantBody from './components/RestaurantBody';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Error from './Pages/Error';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
path:"/",
element:<RestaurantBody/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error/>
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

export default App