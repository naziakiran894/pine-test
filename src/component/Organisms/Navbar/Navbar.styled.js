import { Style } from "@mui/icons-material";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainNavbar = styled(Box)({
  width: "100%",
  height: "52px",
  background: "#3D3D3D",
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width:960px)": {
    width: "100%",
    height: "75px",
    // background: "#3D3D3D",
    display: "flex",
    gap:"10px"
    // justifyContent: "space-between",
  },
});
const Logo = styled(Box)({
  height: "20px",
  width: "116px",
  borderRadius: "0px",
  margin: "16px 46px",
  "@media (max-width:960px)": {
    height: "20px",
    width: "90px",
    borderRadius: "0px",
    margin: "16px 10px",
  }
});

const Text = styled(Box)({
  fontFamily: "Roboto",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0em;",
  textAlign: " left",
  color: "#F9F9F9",
  padding: "16px  44px",
  "@media (max-width:960px)": {}
});
const Navbar = styled(Box)({
  display: "flex",
  height: "80px",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: "0px",
  background: "#E7E7E7",
  boxShadow: "0px 2px 18px 3px rgba(0, 0, 0, 0.25)",
  "@media (max-width:960px)": {
    display: "flex",
    // flexWrap:"wrap",
  height: "80px",
  // justifyContent: "space-between",
  width: "100%",
  borderRadius: "0px",
  background: "#E7E7E7",
  boxShadow: "0px 2px 18px 3px rgba(0, 0, 0, 0.25)",
  }
});

const ELogo = styled(Box)({
  height: "56px",
  width: "60px",
  bordeRadius: "0px",
  margin: "16px 9%",
  "@media (max-width:960px)": {
    width: "40px",
    margin: "16px 2%",
  }
});

const Links = styled(Box)({
  margin: "0% 10%",
  display: "flex",
  gap:"40px",
  justifyContent:"space-between",

  "@media (max-width:960px)": {
    display: "flex",
    gap:"5px",

  },
  "@media (max-width:500px)": {
    display: "flex",
    // gap:"2px",

  },
  
});
const InnerLink = styled(Box)({
  display:'flex',
  fontFamily: "Roboto",fontSize: "17px",fontWeight: "500",lineHeight: "5px",
  letterSpacing:" 0em",textDecoration:"none", listStyle:"none",gap:"20px",padding:"10px",
extAlign: "left",color: "#3E8AAD",
})

export { MainNavbar, Logo, Text, Navbar, ELogo, Links,InnerLink };
