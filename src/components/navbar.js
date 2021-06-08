import React from "react"
import { Link } from "react-router-dom";
import "./css/style.css";

function Navigation() {
  return (
    <>
        <Link className="nav-link" to="/">Home</Link> &nbsp;
        <Link className="nav-link" to="/users">Users</Link>&nbsp;
        <Link className="nav-link" to="/about">About</Link>&nbsp;
        <Link className="nav-link" to="/chat">Chat</Link>
    </>
  )
}

export default Navigation;