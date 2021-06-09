import React from "react"
import { Link } from "react-router-dom";
import "./css/style.css";
import "bootstrap";
import { withAuthenticator } from '@aws-amplify/ui-react'

function Navigation() {
  return (
    <>
      <div className="navbar">
        <Link className="nav-link" to="/">Home</Link> &nbsp;
        <Link className="nav-link" to="/notes">Notes</Link>&nbsp;
        <Link className="nav-link" to="/about">About</Link>
      </div>
    </>
  )
}

export default withAuthenticator(Navigation);