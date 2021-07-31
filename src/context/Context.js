import React, { useState, createContext, useEffect, } from 'react';

import utils from '../utils';
const ApiContext = createContext();

const Context = (props) => {
    const [data, setData] = useState({})
    const [isLoaded, setIsLoaded] = useState(true);
    const [newData, setNewData] = useState([]);
    const [arr, setArr] = useState([]);
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    // const [sliceIndex, setSliceIndex] = useState(0);
    const [sliceLength, setSliceLength] = useState(25);

    console.log(page)
    const getData = async () => {
        const response = await utils()
        const movies = [];
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

//     if(data.movies.length < page*25){
//         setSliceIndex(25*(page-1));
//         setSliceLength(data.movies.length)
//  }else{
//      setSliceIndex(25*(page-1));
//      setSliceLength(page*25)

//  }
// }
// if(data.series.length < page*25){
//      setSliceIndex(25*(page-1));
//      setSliceLength(data.series.length)
// }else{
//   setSliceIndex(25*(page-1));
//   setSliceLength(page*25)

// }

      const change = (name) =>{
            if(name === "series"){
                if(data.series.length > (page*25)){
                    setSliceLength(page*25)
                }else{
                    setSliceLength(data.series.length)
                }
            }
            else{
                if(data.series.length > (page*25)){
                    setSliceLength(page*25)
                }else{
                    setSliceLength(data.series.length)
                }

            }
      } 
   
    // let length;
    // if(64 > (page*25)){
    //     // index = (page-1)*25;
    //     length = page*25;    
    // }else{
    //       length = 64
    // }
    const type = (name) => {
        let index = (page-1)*25;
        
        const items  = name ==='movies'?  data.movies.slice(index, sliceLength): data.series.slice(index,sliceLength)
        setName(name)
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
        <ApiContext.Provider value={{ data, isLoaded, newData, arr, setArr, type,options, name ,page, setPage,change,sliceLength}}>
            {props.children}
        </ApiContext.Provider>

    </>
}

export default Context;
export { ApiContext };