// import React from "react"
import React, { useState } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"

function NavBar() {

    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Zimagez</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default NavBar