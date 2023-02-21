import React, { useState } from 'react'
import './App.css';
import { Form, Nav, Navbar,NavDropdown,Container, Row, } from 'react-bootstrap'

const NavBarC = ({SeachValue}) => {
const [searchResult, UseSrhcState]=useState('')


function handleSubmit(e) {
  e.preventDefault();
  SeachValue(searchResult);
  UseSrhcState('')
  console.log('You clicked submit.');
}  


  return (
    <Row>
      

    <Navbar  bg='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src='./images/restaurant-vector-logo-menu.png' alt='not found' id='Logoimage'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='NavCollapse'/>
        <Navbar.Collapse id="navbarScroll" variant="light">
          <Nav
            className="me-auto m-2 my-lg-0  NavCollapse"
            style={{ maxHeight: '100px' }}
            navbarScroll
         
            >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="... إبحث عن الوجبة "
              className="me-2"
              aria-label="Search"
              onChange={(e)=>UseSrhcState(e.target.value)}
              value={searchResult}
              

            />
            <button className='mx-2' onClick={handleSubmit}>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBarC
