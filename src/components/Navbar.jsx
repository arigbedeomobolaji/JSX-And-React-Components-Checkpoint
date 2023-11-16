import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Navbar bar entirely from react-bootstrap
function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="mb-4 bg-dark bg-gradient">
      <Container>
        <Navbar.Brand href="#home"><div>
          <img src="https://img.freepik.com/free-psd/gold-logo-mockup_511564-1553.jpg?size=626&ext=jpg&ga=GA1.1.567223693.1687376094&semt=sph" style={{borderRadius: "50%"}} width={50} height={50} />
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
          <Nav className="w-100 d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
