const utils = async () =>{


    return await fetch('https://mumer01.github.io/publicApis/BoxOffice.json')
        .then(response => response.json())
        .then(data => data.entries)
    }
export default utils;