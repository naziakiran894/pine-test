import React from "react";
import * as SC from "./SearchInput.styled";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ value, onChange, onBlur, name, id, placeholder }) => {
  return (
    <>
      <div>
        <SC.SearchInput>
          <Box style={{ margin: "10px 5px", display: "flex" }}>
            <SearchIcon
              style={{
                margin: "2px 0px 0px 10px",
                color: " rgba(0, 0, 0, 0.54)",
              }}
            />
            <input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              id={id}
              placeholder={placeholder}
              style={{
                border: "none",
                margin: "0px 5px 3px 5px ",
                background: " #F9F9F9",
                Width: "362px",
                Height: "49px",
              }}
            />
          </Box>
        </SC.SearchInput>
      </div>
    </>
  );
};

export default SearchInput;
