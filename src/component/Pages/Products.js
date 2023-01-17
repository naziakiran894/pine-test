import React from 'react'
import business  from "../../Images/business.png"
import  Navbar from '../Organisms/Navbar/Navbar';
import Footer from '../Organisms/Footer/Footer';
import Card from "../Organisms/Card/Card";
import  { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(false);
    await fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  };

  const handleChange = async (e) => {
    setLoading(true);
    await fetch(`https://dummyjson.com/products/category/${e.target.value}`)
      .then((res) => res.json())
      .then((json) => setData(json.products));
    setCategories(e.target.value);
    setLoading(false);
  };

  const handleSearch = async (e) => {
    await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setOptions(
          json?.products?.map((e, i) => {
            return {
              title: e.title,
              id: i,
            };
          })
        );
      });
  };

  console.log(data, "this is data");

  return (
    <>
    <Box>
      <Navbar />
    <Box style={{display:"flex", gap:"40px", margin:"5% 15%",  }}>
      <Box>
        <img src={ business }  alt=""/>
      </Box>
      <Box>
        <Typography mt="15px"
          mb="25px"
          color="#000000"
          sx={{ fontWeight: 600, fontSize: "28px", Width:
          "728px",
          Height:
          "84px", }}>
        Pine Technologies
        </Typography>
        <Typography>It is a long established fact that a reader will be distracted by the readable content of a page when <br />
        looking a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a</Typography>
           <Typography  mt="20px"
             >Shop # 206 ZS Plaza Gilgit </Typography>
           <Box style={{display:"flex", justifyContent:"space-between"}}>
           <Typography>03402042304</Typography>
           <Typography>Garments</Typography>
           </Box>
          
      </Box>
     
      </Box>
      <Box
        display={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "10px",
          width: " 90%",
          margin: "0 auto",
          "@media (max-width:500px)": {
            display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap:"5%",
          marginTop:"20%",
          columnGap: "10%",
          },
          "@media (max-width:400px)": {
            display: "grid",
            gridTemplateColumns: "1fr",
          }

        }}
      >
        {data?.map((res) => (
          <Card data={res} />
        ))}
      </Box>
      <Box style={{marginTop:"60px"}}>

      </Box>
      <Footer />
    </Box>
    
      

   
    </>
  )
}

export default Products