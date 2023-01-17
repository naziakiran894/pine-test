import React from "react";
import Box from "@mui/material/Box";
import bg from "../../../Images/banner.png";
import { Typography } from "@mui/material";
import Btn from "../../Atoms /Button/Btn";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box maxWidth="700px">
        <img width="100%" src={bg} alt="" />
        <Box style={{ textAlign: "center" }}>
          <Typography style={{ fontWeight: 700, fontSize: "20px" }}>
            thank you
          </Typography>
          <Typography>
            Jamal Garments will contact you see for confrimation{" "}
          </Typography>
          <Btn onClick={() => navigate("/")} title="continue shopping" />
        </Box>
      </Box>
    </>
  );
};

export default Index;
