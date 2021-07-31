import React, { useContext,useEffect} from 'react';
import { ApiContext } from './../context/Context';
import Page from "./Page";

const Movies = () => {
    const {data, type,page,change, sliceLength}   = useContext(ApiContext);
   

    useEffect(() => {

       if(data.movies){ change("movies") ;type("movies")}
         
    }, [data.movies,page,sliceLength])

    


    return <>
        <Page title="Movies"/>
        
    </>

}


export default Movies;