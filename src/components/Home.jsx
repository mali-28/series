import Box from './Box';
import TopBar from './TopBar';
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Footer from './Footer';
import Image from './Image';
const Home = () => {
    return <>
    <TopBar/>
        <Box className="d-flex jc-center flex-wrap">
            <Box className="pb-2 m-3 box-shadow-ccc" >
                <Box className="h-30 w-30 pb-2">
                <Image src="/video.jpg" alt="series-image"/>
                </Box>
                <NavLink to='/series'>
                    <Button className="btn-home" className="bg-black white br-05 b-2-black" >
                        SERIES
                    </Button>
                </NavLink>
            </Box>


            <Box className="pb-2 m-3 box-shadow-ccc"  >
            <Box className="h-30 w-30 pb-2" >
                <Image src="/video.jpg" alt="movies-image"/>
                </Box>
                <NavLink to='/movies' >
                    <Button className="btn-home" className="bg-black white br-05 b-2-black" >
                        MOVIES
                    </Button>
                </NavLink>
            </Box>
        </Box>
        <Footer className="mt-7 bg-black white p-2-0"/>

    </>
}
export default Home;