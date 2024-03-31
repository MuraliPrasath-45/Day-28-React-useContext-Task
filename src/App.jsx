import { useState } from 'react'
import Cart from './cart'
import { Usercontextprovider } from './usecontext'
import './App.css'
import Addtocart from './addtocart'

function App() {

  return (
    <>
    <Usercontextprovider>
    <Addtocart/>
    </Usercontextprovider>
    </>
  )
}

export default App