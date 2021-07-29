import Box from './Box';
import FlexBox from './FlexBox';
import TopBar from './TopBar';
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Footer from './Footer';
import Image from './Image';
const Home = () => {
    return <>
    <TopBar/>
        <FlexBox>
            <Box style={{paddingBottom : 20, margin: 30, boxShadow: "3px 0 5px #ccc, -3px 0 5px #ccc"}}>
                <Box style={{height : 300, width : 300, paddingBottom : 20,}}>
                <Image src="/video.jpg" alt="series-image"/>
                </Box>
                <NavLink to='/series'>
                    <Button className="btn-home" style={{ backgroundColor: "#000", color: "white", borderRadius : "5px", border : "2px solid #000"}}>
                        SERIES
                    </Button>
                </NavLink>
            </Box>
            <Box style={{paddingBottom : 20, margin: 30,  boxShadow: "3px 0 5px #ccc, -3px 0 5px #ccc"}}>
            <Box style={{height : 300, width : 300,marginBottom : 20,}}>
                <Image src="/video.jpg" alt="movies-image"/>
                </Box>
                <NavLink to='/movies' >
                    <Button className="btn-home" style={{backgroundColor: "#000", color: "white", borderRadius : "5px", border : "2px solid #000" }}>
                        MOVIES
                    </Button>
                </NavLink>
            </Box>
        </FlexBox>
        <Footer style={{width : "100vw",position : "fixed", bottom : 0, backgroundColor : "#000", color : "#fff", padding : "10px",}}/>
    </>
}
export default Home;