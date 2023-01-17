import { Box } from "@mui/material";
import { styled } from "@mui/system";



const Footer  = styled(Box)({
    display:"flex",
    justifyContent:"space-between", 
    height:" 87px",
    background: "#E7E7E7",
    "@media (max-width:960px)": {
        display:"flex",
        gap:"10px",
        marginTop:"60%"
        
        
    },
    "@media (max-width:481px)": {
        display:"flex",
        gap:"10px", 
        height:"130px",
        flexDirection:"column"
        
    }
})

const ImgBox = styled(Box)({
    display:"flex",
    gap:"5px",
    margin:"1% 2%",
    "@media (max-width:960px)": {}
    
})

const Icon = styled(Box)({
    display:"flex",
    gap:"10px",
    margin:"2% 10% 2% 1%",
    "@media (max-width:960px)": {
        margin:"4% 18% 2% 2%",
    },
    "@media (max-width:481px)": {
        margin:"2% 18% 20% 20%",
    }
})


export {Footer,ImgBox, Icon  }