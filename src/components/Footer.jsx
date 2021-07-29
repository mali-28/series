import Box from "./Box";

const Footer = (props)=>{
    return <>
    <Box style={{ height : "50px",boxSizing : "border-box", display : "flex", justifyContent : "center", alignItems : "center", ...props.style}}> {props.children || <p>Copyrights © 2020 Geeks of Kolachi. All Rights Reserved</p>}</Box>
        

    </>
}

export default Footer;