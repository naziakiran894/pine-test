import React from 'react'
import * as SC from "./Category.styled"
import  { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = () => {
    const [title, setTitle] = useState(""); 
  return (
    <div>
         <SC.SearchInput>
         
   
   <input
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       placeholder="Category" style={{border:"none", textAlign:"center", margin:"0px 1px 3px 20px "}}
     />
     < SearchIcon style={{margin:"12px 12px 0px 20px"}}/>


</SC.SearchInput>
    </div>
  )
}

export default SearchInput