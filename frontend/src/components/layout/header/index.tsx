import css from './header.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (): JSX.Element => {
    return(
        <Navbar fixed="top" expand="md" className={css.navBar}>
            <Container>
                <Navbar.Brand href="#">
                    <span className={css.logoText}>Defi Syndicate</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${css.navbarBg}`}>
                    <Nav className={css.navItem}>
                        <Nav.Link href="/#">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#chart">Chart</Nav.Link>
                        <Nav.Link href="https://traderjoexyz.com/trade?outputCurrency=0xA171629637C3266b4247551eE67ffdD3f03Fb0b5">Buy</Nav.Link>
                        <Nav.Link href="#socials">Socials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;