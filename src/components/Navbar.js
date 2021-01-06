import React from "react";
import Navbar from "react-bootstrap/Navbar";

function DirNav() {
    return (

            <Navbar>
                <Navbar.Brand>Employee Directory</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>
    );
}

export default DirNav;