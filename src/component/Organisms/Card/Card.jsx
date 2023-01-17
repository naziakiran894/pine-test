import React from "react";
import Box from "@mui/material/Box";
import * as SC from "./Card.styled";
import { Button, Typography } from "@mui/material";
import Model from "../../Atoms /Model/Model";
import Popup from "../../Atoms /Popup/Popup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Store/actions/AddToCart";

const Card = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();


  return (
    <>
      <Box  sx={{ maxWidth: "288px" }}>
        <img
          width="100%"
          height="291px"
          style={{ borderRadius: "5px" }}
          src={data.thumbnail}
          alt="img"
        />
        <Typography
        onClick={handleOpen}
          mt="17px"
          mb="20px"
          color="#000000"
          sx={{ fontWeight: 500, fontSize: "18px" }}
        >
          {data.title}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography>{data.price}</Typography>

          <Link to="/AddShoppingCartIcon">
            {/* onClick={()=>addToCart(thumbnail, title, price, product)} */}
            <Button onClick={() => dispatch(addToCart(data))}>
              Add to cart
            </Button>
          </Link>
        </Box>
      </Box>
      <Model open={open} handleClose={handleClose}>
        <Popup data={data} />
      </Model>

      {/* </Box> */}
    </>
  );
};

export default Card;
