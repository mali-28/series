import React, { useState, createContext, useEffect } from 'react';
import utils from '../utils';
const ApiContext = createContext();

const Context = (props) => {
    const [data,setData] = useState([])

    const getData = async () => {
        const response = await utils()
        setData(response)
    }
    useEffect(()=>{  if(!data.length) getData()}, [])
    
    
    return <>
    <ApiContext.Provider value={data}>
         {props.children}
    </ApiContext.Provider>

    </>
}

export default Context;
export {ApiContext};