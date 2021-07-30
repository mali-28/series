import React from "react";
import Link from "./Link";
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
           
            <Link to="/home" title="HOME"/>
            <Link to="/series" title="SERIES"/>
            <Link to="/movies" title="MOVIES"/>

            


          </div>
        </div>
      </div>
    </header>
  );
}



export default TopBar;