import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Button from "./Button";
const TopBar = () => {

  return (

    <header style={styles.header}>
      <div style={container}>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-around", alignItems: "center"
          }}>
            <div style={styles.title}>
              <p>GOK Streaming</p>
            </div>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-around", alignItems: "center"
          }}>


            <NavLink to='/home' activeStyle={{backgroundColor : "#016CF3"}}>
              <Button className="btn-bar" style={{ backgroundColor: "#0179FD", color: "white" }}>
                HOME
              </Button>
            </NavLink>

            <NavLink to='/series' activeStyle={{backgroundColor : "#016CF3"}}>
              <Button className="btn-bar" style={{ backgroundColor: "#0179FD", color: "white" }}>
                SERIES
              </Button>
            </NavLink>

            <NavLink to="/movies" activeStyle={{backgroundColor : "#016CF3"}}>
              <Button className="btn-bar" style={{ backgroundColor: "#0179FD", color: "white" }}>
                MOVIES
              </Button>
            </NavLink>


          </div>
        </div>
      </div>
    </header>
  );
}

const container = {
  width: "70vw",
  margin: "0 auto",
  height: "100%",
}


const styles = {
  title: {
    fontSize: 40,
  },
  header: {
    padding: 10,
    height: 50,
    color: "white",

    backgroundColor: "#0179FD",

  },
};


export default TopBar;