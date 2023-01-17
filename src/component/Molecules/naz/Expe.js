import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import shoe from "../../../Images/shoe.png";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as SC from "../../Organisms/Cart/CartCard.styled";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { removeItem, getTotal } from "../../../Store/actions/AddToCart";

const CartCard = ({ e }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.addToCartReducer.totalPrice);

  console.log(totalPrice, "state data");

  useEffect(() => {
    dispatch(getTotal(totalPrice + e.price));
  }, []);

  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(e.price);

  useEffect(() => {
    setPrice(e.price * value);
  }, [value]);

  return (
    <>
      <Box style={{ display: "flex" }}>
        <img
          src={e.thumbnail}
          alt=""
          style={{ height: "80px", width: "80px" }}
        />
        <Box style={{ margin: "20px" }}>
          <Typography
            style={{
              height: "23px",
              width: "219px",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "4px",
              color: "#000000",
            }}
          >
            {e.title}
          </Typography>
          <Typography
            style={{
              height: "23px",
              width: "219px",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            {price}
          </Typography>
        </Box>
        <Box>
          <SC.Incre>
            <Box style={{ display: "flex", gap: "20px" }}>
              <button
                disabled={value <= 0}
                onClick={() => {
                  dispatch(getTotal(totalPrice + e.price));
                  setValue(value + 1);
                }}
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
              </button>
              {value}
              <button
                disabled={value <= 0}
                onClick={() => {
                  dispatch(getTotal(totalPrice - e.price));
                  setValue(value - 1);
                }}
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
          </SC.Incre>

          <Box style={{ marginLeft: "397%" }}>
            <DeleteOutlineIcon
              onClick={() => dispatch(removeItem(e.id))}
              style={{
                margin: "15px",
                color: "rgba(255, 1, 1, 0.59)",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartCard;
