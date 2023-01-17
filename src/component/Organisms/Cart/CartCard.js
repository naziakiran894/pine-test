import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import shoe from "../../../Images/shoe.png";
// import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as SC from "./CartCard.styled";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { removeItem, remove_Item } from "../../../Store/actions/AddToCart";
import Exp from "../../Molecules/naz/Expe"

const CartCard = ({ data }) => {
  // const dispatch = useDispatch();

  // const [task, setTask] = useState("");
  const cartData = useSelector(
    (state) => state?.addToCartReducer?.cartItems ?? []
  );

  console.log(cartData, "cartttttttttttt");
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    await fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then(console.log);
  };

  // function handleDelete(id){
  //   const taskCopy = [...data]
  //   taskCopy.splice(id, 1)
  //   setTask(taskCopy)
  // }
  // const handleDelete =  (id) => {
  //   // console.log(id, "del id");
  //   setTask(data( id));
  // };
  console.log(data, "taskkkkkkkkkkk");

  const [value, setValue] = useState(2);

  // const [price, setPrice] = useState(data.price)
  // const [data, setData] = useState(2);

  //   useEffect(()=>{
  // setValue = data.price*value
  //   },[value])

  return (
    <>
      <SC.Carttt>
        <SC.Pack>
          <Typography
            style={{
              height: "23px",
              width: "119px",
              fontWeight: "bold",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "23px",
              color: "#000000",
            }}
          >
            Package 1
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000}",
            }}
          >
            store Name
          </Typography>

          <SC.shoe>
            {cartData?.map((e) => {
              return (
                <>
                <Exp e={e}/>
                </>
              );
            })}
            {/* </Box> */}
          </SC.shoe>
        </SC.Pack>
      </SC.Carttt>
      <Button>Clear to All</Button>
    </>
  );
};

export default CartCard;
