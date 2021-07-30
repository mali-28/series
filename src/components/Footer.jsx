import Box from "./Box";

const Footer = (props)=>{
    return <>
    <Box className= {`${props.className} d-flex jc-center alignItem-center`} style={{ height : "50px",boxSizing : "border-box", display : "flex", justifyContent : "center", alignItems : "center", ...props.style}}> {props.children || <p>Copyrights © 2020 Geeks of Kolachi. All Rights Reserved</p>}</Box>
        

    </>
}

export default Footer;