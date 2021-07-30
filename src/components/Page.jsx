import React, { useContext } from 'react';
import { ApiContext } from './../context/Context';
import SelectInput from './SelectInput';
import Box from './Box';
import TopBar from './TopBar';

import Image from './Image';
import Footer from './Footer';


const Page = (props) => {
    const {isLoaded, arr, options } = useContext(ApiContext);

    const changeOption = (e) => {
        options(e);
    }

    return <>
        <TopBar />
        <Footer className=" h-5 mt-2 mb-3 bg-black white font-3" >{props.title}</Footer>
        {isLoaded ? "Loading..." : <header className="p-1 white" >
            <Footer className="w-50vw h-7 m-2-auto white " ><SelectInput onChange={changeOption} /></Footer>
            <div className="container d-flex flex-wrap">



                {arr?.map((val, id) => {
                    return <>

                        <Box key={id} className="w-20 m-3 overflow-hidden box-shadow-ccc blue" >
                            <Box className="h-20  box-shadow-ccc " >
                                <Image src={val.images["Poster Art"].url} alt="series-image" />
                            </Box>
                            <Box className="p-2-1" >
                                <Box className="font-014 pb-1">
                                    title : {val.title}
                                </Box>
                                <hr />
                                <Box className="pt-1"  >
                                    year : {val.releaseYear}
                                </Box>
                            </Box>
                        </Box>
                    </>
                })}
            </div>
        </header>
        }
        <Footer className="mt-7 bg-black white p-2-0" />
    </>
}






export default Page;