import { useEffect } from 'react';


const Type = (data, setIsLoaded, setNewData, setArr,name) =>{

     useEffect(() => {
         console.log(data)
    const newArr = data?.filter((val) => {
        return val.programType === {name}

    })
    const items = newArr.slice(0, 25);
    console.log(newArr.slice(0, 25))
    setNewData(items);
    setArr(items)
    
    setIsLoaded(false);
}, [data])
}
export default Type;