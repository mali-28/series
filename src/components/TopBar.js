import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const TopBar = () => {

  return (

    <header className="header">
      <div className='container'>
        <div  className="d-flex jc-spaceBetween" >
          <div className="d-flex jc-spaceAround alignItem-center" >
            <div className="font-4">
              <p>GOK Streaming</p>
            </div>
          </div>
          <div className="d-flex jc-spaceAround alignItem-center">


            <NavLink to='/home' activeClassName="active-menu">
              <Button className="btn-bar" className="bg-blue white">
                HOME
              </Button>
            </NavLink>

            <NavLink to='/series' activeClassName="active-menu">
              <Button className="btn-bar" className="bg-blue white">
                SERIES
              </Button>
            </NavLink>

            <NavLink to="/movies" activeClassName="active-menu">
              <Button className="btn-bar" className="bg-blue white">
                MOVIES
              </Button>
            </NavLink>


          </div>
        </div>
      </div>
    </header>
  );
}



export default TopBar;