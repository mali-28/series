
import Button from "./Button";
import { NavLink } from "react-router-dom";


const Link = (props) => {
    return <>

        <NavLink to={props.to} activeClassName="active-menu">
            <Button className="btn-bar" className="bg-blue white">
                {props.title}
            </Button>
        </NavLink>

    </>
}

export default Link;