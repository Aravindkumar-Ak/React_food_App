import React, { useContext, useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
 import Header from './components/Header';
import RestaurantBody from './components/RestaurantBody';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Error from './Pages/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utilis/UserContext';
import { Provider } from 'react-redux';
import appStore from './utilis/appStore';
import Cart from './Pages/Cart';
import Footer from './components/Footer';



const App = () => {



  return (
  <Provider store={appStore}>
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
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
    },
    {
      path:"/cart",
      element:<Cart/>
    }
  ],
  errorElement:<Error/>
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

export default App