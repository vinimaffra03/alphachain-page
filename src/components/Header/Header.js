import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import OnChainData from "../OnChainData/OnChainData";

function Header() {
  return (
    <div>
      <Navbar expand="md" className="bg-body-tertiary mb-3 py-3">
        <Container className="d-flex justify-content-center px-5">
          <Navbar.Brand href="#" className="fs-4">
            <strong>ALPHA</strong>CHAIN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navbar">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Inicio</Nav.Link>

                <Nav.Link href="#action2">Aulas</Nav.Link>

                <NavDropdown
                  className="dropdown-toggle-no-caret"
                  title="Comunidade"
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item href="https://chat.whatsapp.com/GFcCTY10uV7L5sGFbBaWc6">
                    Grupo WhatsApp Gratuito
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="https://discord.gg/a8FSa7g8">
                    Discord
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="t.me/startcryptobr">
                    Telegram
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#action2">Contato</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <OnChainData />
    </div>
  );
}

export default Header;
