
const Box = (props)=>{
    const style ={
    }
    return <>
    <div key={props.key} style={{...style, ...props.style}}>
        {props.children}
    </div>
        
    </>
}

export default Box;