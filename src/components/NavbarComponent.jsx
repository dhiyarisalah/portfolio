import {useState, useEffect} from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { navLinks } from '../assets/data'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    const[changeColor, setColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        changeBackgroundColor();
        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div>
            <Navbar expand="lg" className= {changeColor ? "color-active" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-center"> 
                    {navLinks.map((link) => {
                        return (
                            <div className= "nav-link" key ={link.id}>
                                <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""
                            } end >{link.text} </NavLink>
                            </div>
                        );
                    })}
                </Nav>
                </Navbar.Collapse>
                <div className= "text-center">
                    <button> Contact Me</button>
                </div>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent