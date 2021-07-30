import Image from './Image';
import Box from './Box';


const Card = (props) => {
    return <>

        <Box key={props.id}  className="w-20 m-3 overflow-hidden box-shadow-ccc blue" >
            <Box className="h-20  box-shadow-ccc " >
                <Image src={props.val.images["Poster Art"].url} alt="series-image" />
            </Box>
            <Box className="p-2-1" >
                <Box className="font-014 pb-1">
                    title : {props.val.title}
                </Box>
                <hr />
                <Box className="pt-1"  >
                    year : {props.val.releaseYear}
                </Box>
            </Box>
        </Box>

    </>
}

export default Card;