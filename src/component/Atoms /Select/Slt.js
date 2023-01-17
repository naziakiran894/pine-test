import React from "react";
import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Slt = ({ value, onChange }) => {
  const [options, setOptions] = useState([]);

  const getByCategory = async () => {
    await fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getByCategory();
  }, []);

  return (
    <div style={{marginRight:"15%"}}> 
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-name-label">categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Name" />}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Slt;