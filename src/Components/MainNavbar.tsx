import { Navbar, Container } from "react-bootstrap";
import Logo from "../img/Logo.svg"

type NavProps = {
    title?: string;
    isLogo?: boolean;
}

const MainNavbar = ({ title, isLogo}: NavProps): JSX.Element => {
    return (
    <Navbar bg="light" variant="light">
       <Container >
      <Navbar.Brand href="#home" style={{margin: "0 auto"}}>
          {isLogo && <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />}
        {title && <span>{title}</span>}
        {!title && <span style={{color: "#B072FF",fontWeight: 800}}>Home</span>}
        {!title && <span style={{color: "#33373B",fontWeight: 800}}>Page</span>}
      </Navbar.Brand>
    </Container>
  </Navbar>
)
}

export default MainNavbar;