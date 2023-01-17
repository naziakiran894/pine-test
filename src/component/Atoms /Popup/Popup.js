import React, { useState, useEffect } from "react";
import * as SC from "./Popup.styled";
import img from "../../../Images/shoe.png";
import Box from "@mui/material/Box";
import business from "../../../Images/business.png";
import { Typography } from "@mui/material";

const Popup = ({ data }) => {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(data.price);

  useEffect(()=>{
setPrice(data.price*value)
  },[value])
  return (
    <>
      <SC.Popup>
        <Box>
          <img
            src={data.thumbnail}
            alt=""
            style={{ width: " 400px", height: "400px" }}
          />
        </Box>
        <Box>
          <SC.TextImg>
            <Box>
              <img src={business} alt="" />
            </Box>
            <SC.Text>
              <Box
                style={{
                  borderBottom: "2px solid #E5E5E5",
                  paddingBottom: "26px",
                }}
              >
                <Typography
                  style={{
                    height: "21px",
                    width: "93px",
                    fontWeight: "bold",
                    margin: "15px",
                    borderRadius: "nullpx",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  style={{
                    height: "16px",
                    borderRadius: "nullpx",
                  }}
                >
                  {data.category}
                </Typography>
              </Box>

              <SC.WomenHell>
                <Box>
                  <h4>Women hell</h4>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "20px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography>{price}</Typography>
                    </Box>
                    <Box
                      sx={{ marginLeft: "70px", display: "flex", gap: "10px" }}
                    >
                      <Box
                        onClick={() => setValue(value + 1)}
                        style={{
                          borderRadius: "50%",
                          border: "1px solid black",
                          height: "16px",
                          width: "16px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </Box>
                      {value}
                      <button
                    disabled={value<=0}
                        onClick={() => setValue(value - 1)}
                        style={{
                          borderRadius: "50%",
                          border: "1px solid black",
                          height: "16px",
                          width: "16px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                    </Box>
                  </Box>
                </Box>
                <Box style={{ margin: "10px 10px" }}>
                  <Typography
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#000000",
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </SC.WomenHell>
            </SC.Text>
          </SC.TextImg>
        </Box>
      </SC.Popup>
    </>
  );
};

export default Popup;
