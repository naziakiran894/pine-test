
import React from 'react'
import Home  from "../Pages/Home"
import Products from '../Pages/Products';
import Stores from '../Pages/Stores'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from '../Pages/Cart';
import Box from "@mui/material/Box";
import { Routes , Route, BrowserRouter } from 'react-router-dom'


const Routing = () => {
  return (
    <Box>
          <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Stores' element={<Stores />} />
            <Route path='/Products' element={ <Products />} />
            <Route path='/AddShoppingCartIcon' element={ <Cart/>} />    
        </Routes>
        </BrowserRouter>
    </Box>
  )
}

export default Routing