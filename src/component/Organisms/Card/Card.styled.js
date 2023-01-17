import { Style } from "@mui/icons-material";
import { Box } from "@mui/material";
import { styled } from "@mui/system";



const Card = styled(Box)({
    height:"400px", width:"400px",
borderRadius: "0px",
display:"flex",
backgroundColor:"black",
margin:"50px"

})
const CardCircle = styled(Box)({
height:"80px",
maxWidth:"80px",
margin:"90px 12px 0px 20px ", 
borderRadius:"50%",
border:"5px solid white"
})


export {Card, CardCircle}


    




