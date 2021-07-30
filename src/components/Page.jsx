import React, { useContext,useEffect  } from 'react';
import { ApiContext } from './../context/Context';
import SelectInput from './SelectInput';
import TopBar from './TopBar';
import Footer from './Footer';
import Card from './Card';
import Box from './Box';


const Page = (props) => {
    const {isLoaded, arr, options } = useContext(ApiContext);

    const changeOption = (e) => {
        options(e);
        
    }
    useEffect(()=>{ console.log(arr.length, "ssss")}, [changeOption])

    return <>
        <TopBar />
        <Footer className=" h-5 mt-2 mb-3 bg-black white font-3" >{props.title}</Footer>
        {isLoaded ? "Loading..." : <header className="p-1 white" >
            <Footer className="w-50vw h-7 m-2-auto white " ><SelectInput onChange={changeOption} /></Footer>
            <div className="container d-flex flex-wrap">
                {arr.length ? arr.map((val, id) => {
                    return <>
                         
                        <Card key={id} id={id} val={val}/>
                        
                    </>
                }) : <Footer className="red  w-100vw" >Movie not found</Footer>  }
            </div>
        </header>
        }
        <Footer className=" bg-black white p-2-0 absolute-bottom" />
    </>
}






export default Page;