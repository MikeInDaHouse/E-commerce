import React from 'react'
import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import Logo from '../assets/logo.png';

const Header = () => {
const { cartItems } = useSelector((state) => state.cart)


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
                  
                    <Nav.Link href='/cart'><FaShoppingCart />Cart
                    {
                      cartItems.length > 0 && (
                       <Badge pill bg='success' style={{marginLeft:'5px'}}>
                       { cartItems.reduce((a, c) => a + c.qty, 0)}
                       </Badge>
                      )
                    }
                    
                    </Nav.Link>
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