import Box from './Box';
import TopBar from './TopBar';
import Footer from './Footer';
import HomeCard from './HomeCard';
const Home = () => {
    return <>
        <TopBar />
        <Box className="d-flex jc-center flex-wrap">
            <HomeCard src="/video.jpg" title="SERIES" to="series" />
            <HomeCard src="/video.jpg" title="MOVIES" to="movies" />
        </Box>
        <Footer className="mt-7 bg-black white p-2-0 absolute-bottom" />

    </>
}
export default Home;