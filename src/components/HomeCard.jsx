import Image from './Image';
import Box from './Box';
import Button from "./Button";
import { NavLink } from "react-router-dom";


const HomeCard = (props) => {
    return <>

            <Box className="pb-2 m-3 box-shadow-ccc" >
                <Box className="h-30 w-30 pb-2">
                <Image src={props.src} alt="series-image"/>
                </Box>
                <NavLink to={props.to}>
                    <Button className="btn-home" className="bg-black white br-05 b-2-black" >
                        {props.title}
                    </Button>
                </NavLink>
            </Box>

    </>
}

export default HomeCard;