import Box from "./Box";

const Footer = (props)=>{
    return <>
    <Box className= {` d-flex jc-center alignItem-center ${props.className}`} > {props.children || <p>Copyrights © 2020 Geeks of Kolachi. All Rights Reserved</p>}</Box>
        

    </>
}

export default Footer;