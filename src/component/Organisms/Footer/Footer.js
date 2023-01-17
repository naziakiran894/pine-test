import React from "react";
import * as SC from "./Footer.styled";
import mainlogo from "../../../Images/mainlogo.png";
import pinelogo from "../../../Images/pinelogo.png";
import SearchIcon from "@mui/icons-material/Search";

const Footer = () => {
  return (
    <>
      <SC.Footer>
        <SC.ImgBox>
          <img
            src={mainlogo}
            alt="img"
            style={{ height: "46px", width: "121px", margin: "10px" }}
          />
          <img
            src={pinelogo}
            alt="img"
            style={{ height: "45px", width: "127px", margin: "10px" }}
          />
        </SC.ImgBox>

        <SC.Icon>
          <SearchIcon />
          <SearchIcon />
          <SearchIcon />
        </SC.Icon>
      </SC.Footer>
    </>
  );
};

export default Footer;
