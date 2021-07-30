
const Box = (props)=>{
    return <>
    <div key={props.key}className={props.className}>
        {props.children}
    </div>
        
    </>
}

export default Box;