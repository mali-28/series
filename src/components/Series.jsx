import React, { useContext,  useEffect } from 'react';
import { ApiContext } from './../context/Context';
import Page from "./Page";

const Series = ()=>{

    const {data, type,page,change,sliceLength}   = useContext(ApiContext);



    useEffect(() => {
        if(data.series) { change("series") ; type("series");}
    }, [data.movies,page,sliceLength]);
    

    return <>
        <Page title="Series"/>
    </>
}


export default Series;