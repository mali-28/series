import React, { useState, createContext, useEffect, } from 'react';

import utils from '../utils';
const ApiContext = createContext();

const Context = (props) => {
    const [data, setData] = useState({})
    const [isLoaded, setIsLoaded] = useState(true);
    const [newData, setNewData] = useState([]);
    const [arr, setArr] = useState([]);
    const getData = async () => {
        const response = await utils()
        const movies = []
        const series = [];

        response.forEach(element => {
                if(element.programType === 'movie') movies.push(element)
                else series.push(element)
        });

        setData({
            movies,
            series
        })
    }
    useEffect(() => { if (!data.length) getData() }, []);


    const type = (name) => {
        // console.log(data)
        const items  = name ==='movies'? data.movies.slice(0, 25): data.series.slice(0,25)
        // console.log(items)
        setNewData(items);
        setArr(items)
        setIsLoaded(false);
    }


    const options = (e) =>{
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
        <ApiContext.Provider value={{ data, isLoaded, newData, arr, setArr, type,options }}>
            {props.children}
        </ApiContext.Provider>

    </>
}

export default Context;
export { ApiContext };