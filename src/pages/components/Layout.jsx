import React from 'react'
import { Outlet } from "react-router-dom";//Importo el Outlet

//Importo el header:
import HeaderNav from './HeaderNav'

const Layout = () => {
  return (
    <div>
      <header>
      <HeaderNav/>
      </header>
      <main className='p-5'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout