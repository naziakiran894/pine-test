// 

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import banner from "../../Images/banner.png";
import SearchInput from "../Atoms /SearchInput/SearchInput";
import Card from "../Organisms/Card/Card";
import Navbar from "../Organisms/Navbar/Navbar";
import Slt from "../Atoms /Select/Slt";
import Autocomplete from "../Atoms /AutoComplete";
import Model from "../Atoms /Model/Model";
import Popup from "../Atoms /Popup/Popup";
import Footer from "../Organisms/Footer/Footer";
import Loader from "../Atoms /Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setData(json.products));
    setLoading(false);
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
    setLoading(true);
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
    setLoading(false);
  };

  console.log(data, "this is data");

  return (
    <><Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <img src={banner} alt="" style={{ width: "100%", height: "575px" }} />
      </Box>
      <Box
        sx={{
          height: "77px",
          width: "90%",
          margin: "30px auto",
          borderRadius: " 0px",
          background: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width:960px)": {
            margin: "20px 0px",
            display: "flex",
            gap: "20px",
            width: "98%",
          },
          "@media (max-width:750px)": {
            margin: "20px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "98%",
          },
        }}
      >
        <Autocomplete
          onChange={handleSearch}
          setOptions={setOptions}
          options={options} />
        <Slt value={categories} onChange={handleChange} />

      </Box>
      {loading && (
        <Box display="flex" width="100%" justifyContent="center">
          <Loader />
        </Box>
      )}
      <Box
        display={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "10px",
          width: " 90%",
          margin: "0 auto",
          "@media (max-width:850px)": {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "5%",
            marginTop: "20%",
            columnGap: "10%",
            width: " 90%",
          },
          "@media (max-width:500px)": {
            display: "grid",
            width: " 90%",
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {data && !loading && data?.map((res) => <Card data={res} />)}
      </Box>
    </Box><Footer /></>
  );
};

export default Home;