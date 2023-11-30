import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
               <Navbar.Brand href='/'>
                <img src={Logo} alt='proshop'/>
                ProShop
                </Navbar.Brand>
                </LinkContainer>
                
               <Navbar.Toggle aria-controls='basic-navbar-nav'/>
               <Navbar.Collapse>
               
                <Nav className='ms-auto'>
                <LinkContainer to='Cart'>
                    <Nav.Link href='/cart'><FaShoppingCart />Cart</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/Login'>
                    <Nav.Link href='/login'><FaUser />Sin In</Nav.Link>
                    </LinkContainer>
                </Nav>
               </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
 
export default Header;