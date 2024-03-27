import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateUserPages, DetailUserPages, EditUserPages, HomeUserPages } from '../pages'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomeUserPages/>}/>
      <Route path='/create' element={<CreateUserPages/>}/>
      <Route path='/edit/:id' element={<EditUserPages/>}/>
      <Route path='/detail/:id' element={<DetailUserPages/>}/>
    </Routes>
  )
}
