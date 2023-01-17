import React from "react";
import Form from "../Organisms/Form/Form";
import CartCard from "../Organisms/Cart/CartCard";
import Box from "@mui/material/Box";
import Navbar from "../Organisms/Navbar/Navbar";
import Footer from "../Organisms/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box
        style={{
          display: "flex",
          padding: "5% 12%",
          "@media (max-width:960px)": {
            display: "flex",
            flexDirection: "column",
            background: "red",
          },
        }}
      >
        <Box>
          <Box>
            {/* <CartCard /> */}
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <CartCard />
          </Box>
        </Box>
        <Box>
          <Form />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Cart;
