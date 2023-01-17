import React from 'react'
import * as SC from "./Navbar.styled";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import mainlogo from '../../../Images/mainlogo.png'
import logo from '../../../Images/logo.png'

import { Typography } from '@mui/material';


const MainnNavbar = () => {
  return (
  <>
  <SC.MainNavbar>
    <SC.Logo>
      <img src={ mainlogo} alt= "img"/>
    </SC.Logo>

    <SC.Text>
      <Typography>Downlaod eHisaab now to maintain your business 
        accounts and get online sale orders.</Typography>
    </SC.Text>
  </SC.MainNavbar>



  {/*  */}
  <SC.Navbar>
  <SC.ELogo>
      <img src={ logo} alt= "img"/>
    </SC.ELogo>
    <SC.Links>
    <Link to="/" style={{fontFamily: "Roboto",fontSize: "17px",fontWeight: "500",lineHeight: "20px",
    letterSpacing:" 0em",textDecoration:"none", listStyle:"none",gap:"20px",padding:"30px",
extAlign: "left",color: "#3E8AAD",

}}> Home</Link>
      <Link to="/Stores" style={{fontFamily: "Roboto",fontSize: "17px",fontWeight: "500",lineHeight: "20px",
    letterSpacing:" 0em",textDecoration:"none", listStyle:"none",gap:"20px",padding:"30px",
extAlign: "left",color: "#3E8AAD",
      }}>Stores</Link>
      <Link to="/Products" style={{fontFamily: "Roboto",fontSize: "17px",fontWeight: "500",lineHeight: "20px",
    letterSpacing:" 0em",textDecoration:"none", listStyle:"none",gap:"20px",padding:"30px",
extAlign: "left",color: "#3E8AAD",
    }}>Products</Link>
      <Link to="/AddShoppingCartIcon" style={{fontFamily: "Roboto",fontSize: "17px",fontWeight: "500",lineHeight: "20px",
    letterSpacing:" 0em",textDecoration:"none", listStyle:"none",gap:"20px",padding:"30px",
extAlign: "left",color: "#3E8AAD",
  }}><AddShoppingCartIcon /></Link>

    </SC.Links>


  </SC.Navbar>

  </>

  )
}


export default MainnNavbar