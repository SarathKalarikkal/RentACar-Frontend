import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

import ThemeChanger from '../components/Theme/ThemeChanger'
import AdminHeader from '../components/Admin/AdminSidebar'


export const AdminLayout = () => {
  return (
    <div>
        <AdminHeader/>
        <ThemeChanger />
        <Outlet />
    </div>
  )
}
