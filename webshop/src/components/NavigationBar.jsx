import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  // const changeLangEn = () => {
  //   i18n.changeLanguage("en");
  // }

  // const changeLangEe = () => {
  //   i18n.changeLanguage("ee");
  // }

  const changeLang = (lang) => {
		i18n.changeLanguage(lang); // tänu sellele et installisime react-18next mooduli
    localStorage.setItem("language", lang); // see on JavaScripti juba sisse kirjutatud
	};

  const navigate = useNavigate();

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
          <Nav>
            <span>{cartSum} €</span>
            <img onClick={() => changeLang("en")} className="lang" src="/english.png" alt="" />
            <img onClick={() => changeLang("ee")} className="lang" src="/estonian.png" alt="" />
            {loggedIn === false && <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/signup">{t("signup")}</Nav.Link>}
            {loggedIn === true && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;