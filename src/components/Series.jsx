import React, { useContext, useState, useEffect } from 'react';
import { ApiContext } from './../context/Context';
import Page from "./Page";

const Series = ()=>{

    const {data,type,}   = useContext(ApiContext);


    useEffect(() => {
        if(data.series)  type("series");
    }, [data.series]);
    

    return <>
        <Page title="Series"/>
    </>
}


export default Series;