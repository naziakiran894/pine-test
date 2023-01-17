import * as React from "react";
import * as SC from "./Popup.styled";
import img from "../../../Images/shoe.png";
import Box from "@mui/material/Box";
import business from "../../../Images/business.png";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <>
                <SC.Popup>
                  <Box>
                    <img
                      src={img} alt=""
                      style={{ width: " 400px", height: "400px" }}
                    />
                  </Box>
                  <Box>
                    <SC.TextImg>
                      <Box>
                        <img src={business} alt="" />
                      </Box>

                      <SC.Text>
                        <Typography
                          style={{
                            height: "21px",
                            width: "93px",
                            fontWeight: "bold",
                            margin: "10px",
                            borderRadius: "nullpx",
                          }}
                        >
                          Store name
                        </Typography>
                        <Typography
                          style={{
                            height: "16px",
                            borderRadius: "nullpx",
                          }}
                        >
                          top number 102 ZS plaza gilgit
                        </Typography>
                        <Box>
                          <Typography>Women high hell</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "10px",
                              marginTop: "20px",
                            }}
                          >
                            <Box>
                              <Typography>1200Rs</Typography>
                            </Box>
                            <Box
                              sx={{
                                marginLeft: "70px",
                                display: "flex",
                                gap: "10px",
                              }}
                            >
                              <Box
                                style={{
                                  borderRadius: "50%",
                                  border: "1px solid black",
                                  height: "16px",
                                  width: "16px",
                                  textAlign: "center",
                                  background: " rgba(0, 0, 0, 0.54)",
                                }}
                              >
                                +
                              </Box>
                              2
                              <Box
                                style={{
                                  borderRadius: "50%",
                                  border: "1px solid black",
                                  height: "16px",
                                  width: "16px",
                                  textAlign: "center",
                                }}
                              >
                                -
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </SC.Text>
                    </SC.TextImg>
                    <Box style={{ margin: "10px 40px" }}>
                      <Typography
                        style={{
                          width: "325px",
                          height: "76px",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#000000",
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry. Lorem <br />
                        Ipsum has been the industry's standard
                        <br /> dummy text ever since the 1500s{" "}
                      </Typography>
                    </Box>
                  </Box>
                </SC.Popup>
              </>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
