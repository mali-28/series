
const Image = (props) =>{
   const style = {
       width : "100%",
       height : "100%",
       boxSizing :"border-box"
   }
    return<><img src={props.src} alt={props.alt || "image"} style={{...style, ...props.style}}/>
       
    </>
}

export default Image;