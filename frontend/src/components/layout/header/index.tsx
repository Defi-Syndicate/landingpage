import css from './header.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SocialLink from '../../social-link';

const Header = (): JSX.Element => {
    return (
        <Navbar fixed="top" expand="md" className={css.navBar}>
            <Container>
                <Navbar.Brand href="#">
                    <span className={css.logoText}>Defi Syndicate</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${css.navbarBg}`}>
                    <Nav className={css.navItem}>
                        <Nav.Link title='About' href="#about">About</Nav.Link>
                        <Nav.Link title='DEX Chart' href="#chart">Chart</Nav.Link>
                        <Nav.Link title='Buy $SIN' href="https://traderjoexyz.com/trade?outputCurrency=0x17103cae8C45713c8f94C2c279D166b46480cc9A">Buy</Nav.Link>
                        <div className={css.socialBar}>
                            <SocialLink title="discord"></SocialLink>
                            <SocialLink title="twitter"></SocialLink>
                            <SocialLink title="medium"></SocialLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
