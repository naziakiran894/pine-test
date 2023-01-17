
import { Box } from "@mui/material";
import { styled } from "@mui/system";



const Carttt = styled(Box)({
    height: "374px",
    width: "800px",
    borderRadius: "0px",
    background: "#FBFBFB",
boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
// display:"flex",
// justifyContent:"space-between",
padding:"30px",
"@media (max-width:960px)": {
    width: "400px",
    // display:"flex",
    margin:"10px 0px",
    padding:"10px 20px 10px 0px ",
}   
})

const Pack = styled(Box)({

})
const shoe = styled(Box)({
// display:"flex",
gap:"20px",
margin:"30px 5px",
"@media (max-width:960px)": {
    margin:"30px 10px",
}
})

const Incre = styled(Box)({
    marginTop:"50px",
    marginLeft:"380%",
    display:"flex",
    gap:"70px",
    "@media (max-width:960px)": {

    }
})


export {Carttt , Pack, shoe, Incre}