import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/Digital Lips.png';

function DpNav() {
  return (
      <Navbar style={{ backgroundColor: '#fa9ece' }}  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} className='navimg' /> Digital Pleasures</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Users">Usuarios</Nav.Link>
            <Nav.Link href="#Products">Productos</Nav.Link>
            <Nav.Link href="#Se">Something Else</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default DpNav;