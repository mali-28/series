import React, { useContext, useState, useEffect } from 'react';
import Footer from './Footer';
import { ApiContext } from './../context/Context';
import Box from './Box';
import Image from './Image';
import TopBar from './TopBar';
import SelectInput from './SelectInput';


const Movies = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [newData, setNewData] = useState([]);
    const [arr, setArr] = useState([]);
    const data = useContext(ApiContext);




    useEffect(() => {
        const newArr = data?.filter((val, id) => {
            return val.programType === "movie"

        })
        const items = newArr.slice(0, 25);
        console.log(items)
        setNewData(items);
        setArr(items)

        setIsLoaded(false);
    }, [data]);


    const changeOption = (e) => {
        const year = parseInt(e.target.value);

        let arr;
        if (year !== 0) {
            arr = newData.filter((val) => {
                return val.releaseYear === year;

            })
        }else{

            arr = newData;
        }
        

        
        setArr(arr);
    }


    return <>
        <TopBar />
        <Footer style={{ marginTop: "20px", marginBottom: "30px", backgroundColor: "#000", color: "#fff", padding: "10px", fontSize: 30, boxSizing: "border-box", }} >Movies</Footer>
        {isLoaded ? "Loading..." : <header style={styles.header}>
            <Footer style={{ width: "50vw", height: 70, margin: "20px auto", color: "#fff", padding: "10px", fontSize: 30, boxSizing: "border-box", }} ><SelectInput onChange={changeOption} /></Footer>
            <div style={container}>



                {arr.map((val, id) => {
                    return <>

                        <Box key={id} style={{ width: 200, overFlow: "hidden", margin: 30, boxShadow: "3px 0 5px #ccc, -3px 0 5px #ccc", color: "#0179FD" }}>
                            <Box style={{ height: 200, boxShadow: "3px 0 5px #ccc, -3px 0 5px #ccc", }}>
                                <Image src={val.images["Poster Art"].url} alt="series-image" />
                            </Box>
                            <Box style={{ padding: "20px 10px", }}>
                                <Box style={{ fontSize: 14, paddingBottom: 10 }}>
                                    title : {val.title}
                                </Box>
                                <hr />
                                <Box style={{ paddingTop: 10 }} >
                                    year : {val.releaseYear}
                                </Box>
                            </Box>
                        </Box>
                    </>
                })}
            </div>
        </header>
        }





        <Footer style={{ marginTop: "70px", backgroundColor: "#000", color: "#fff", padding: "10px", }} />
    </>

}

const container = {
    width: "80vw",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
}


const styles = {
    title: {
        fontSize: 40,
    },
    header: {
        padding: 10,
        height: "100%",
        color: "white",


    },
};

export default Movies;