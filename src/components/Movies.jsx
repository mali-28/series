import React, { useContext,useEffect} from 'react';
import { ApiContext } from './../context/Context';
import Page from "./Page";

const Movies = () => {
    const {data, type}   = useContext(ApiContext);
   

    useEffect(() => {
       if(data.movies) type("movies")

    }, [data.movies])

    


    return <>
        <Page title="Movies"/>
        
    </>

}


export default Movies;