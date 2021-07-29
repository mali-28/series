
const FlexBox = (props)=>{
    const style ={
        display : "inline-flex"
    }
    return <>
    <div style={{...style, ...props.style}}>
        {props.children}
    </div>
        
    </>
}

export default FlexBox;