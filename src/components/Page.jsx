import React, { useContext } from 'react';
import { ApiContext } from './../context/Context';
import SelectInput from './SelectInput';
import TopBar from './TopBar';
import Box from './Box';
import Footer from './Footer';
import Card from './Card';


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
                        <Card id={id} val={val}/>
                        
                    </>
                })}
            </div>
        </header>
        }
        <Footer className=" bg-black white p-2-0 absolute-bottom" />
    </>
}






export default Page;