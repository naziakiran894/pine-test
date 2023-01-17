import React, { useState } from "react";
import * as SC from "./Form.styled";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import Btn from "../../Atoms /Button/Btn";
import * as Yup from "yup";
import SearchInput from "../../Atoms /SearchInput/SearchInput";
import { Typography } from "@mui/material";
import Modal from "../../Atoms /Model/Model";
import ThankYouModal from "../../Atoms /Tabloid/index";
import { useSelector } from "react-redux";

const Form = () => {
  const [open, setOpen] = useState(false)
  const totalPrice = useSelector((state) => state.addToCartReducer.totalPrice);

  const initialValues = {
    name: "",
    Phone: "",
    City: "",
    State: "",
    StreetAddress: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
  useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema ,
    onSubmit: (values) => {
      handleOpen();
    },
    
  });
useEffect(() => {
  getpost();
}, []);


console.log(values, "valuessssssssssss")

  const signUpSchema = Yup.object({
    name: Yup.string("Enter your Name").required("Name is required"),
    Phone: Yup.string("Enter your Phone no")
      .min(11, "Phone no should be of minimum 11 characters length")
      .required("Phone no is required"),
    City: Yup.string("Enter your City").required("City name is required"),
    State: Yup.string("Enter your State").required("State name is required"),
    StreetAdress: Yup.string("Enter your StreetAdress").required(
      "StreetAdress name is required"
    ),
  });
  // handleSubmit = (e) => {
  //   e.preventDefault();
  // };
 

  const formik = useFormik({
    initialValues: {
      name: "",
      Phone: "",
      City: "",
      State: "",
      StreetAdress: "",
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getpost = async () => {
    await fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <SC.SearchBox>
      <form onSubmit={handleSubmit}>
        <Box
          style={{
            height: "374px",
            width: " 360px",
            borderRadius: "0px",
            background: " #FBFBFB",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            margin: "0px 10px 0px 50px",
          }}
        >
          <Box style={{ paddingTop: "10px" }}>
            <SC.Input>
              <SearchInput
                name="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                style={{ margin: "" }}
              />
              {/* {<p>{errors.name}</p>} */}
              <SearchInput
                placeholder="phone"
                name="Phone"
                value={values.Phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Phone && Boolean(errors.Phone)}
                helperText={touched.Phone && errors.Phone}
              />
              <SearchInput
                placeholder="State"
                name="State"
                value={values.State}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.State && Boolean(errors.State)}
                helperText={touched.State && errors.State}
              />
              <SearchInput
                placeholder="City"
                name="City"
                value={values.City}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.City && Boolean(errors.City)}
                helperText={touched.City && errors.City}
              />
              <SearchInput
                placeholder="StreetAddress"
                name="StreetAddress"
                value={values.StreetAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.StreetAddress && Boolean(errors.StreetAddress)}
                helperText={touched.StreetAddress && errors.StreetAddress}
              />
            </SC.Input>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
            width: " 360px",
            height: "58px",
            marginLeft: "50px",
            background: "#FBFBFB",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography style={{ height: "19px", width: "76px", margin: "20px" }}>
            Total price
          </Typography>
          <span
            style={{
              width: "59px",
              height: " 19px",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              margin: "20px",
            }}
          >
            {totalPrice}Rs
          </span>
        </Box>

        <Btn onClick={handleOpen} title="place an order" />
      </form>
      <Modal handleClose={handleClose} open={open}>
        <ThankYouModal />
      </Modal>
    </SC.SearchBox>
  );
};

export default Form;
