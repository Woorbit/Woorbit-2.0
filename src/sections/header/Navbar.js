import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function TopNav({user}){

   const [scrolled,setScrolled] = React.useState(false);

    React.useEffect(()=>{       
        function onScroll(e){
        	if(window.scrollY > 0){
        		setScrolled(true);
        		return;
        	}
    		setScrolled(false);
        }
    	document.addEventListener('scroll',onScroll)
    	return ()=>{
    		document.removeEventListener('scroll',onScroll)
    	}
    })

    function handleScrollTop(){
    	window.scrollTo(0,0);
    }


    const NavStyle = scrolled ? {backgroundColor:"white",
                                 boxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 WebkitBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 MozBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 transition:"550ms"} 
                                 : {backgroundColor:"transparent"}


	return(
		<Navbar style={NavStyle} className="nav-bg" expand="lg" fixed="top">
		  <Container className="d-flex">
		    <Navbar.Brand href="#home">
		        <img
		          alt="logo"
		          src="/logo.svg"
		          width="30"
		          height="30"
		          className="d-inline-block align-top"
		        />{' '}
		        Woorbit
            </Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
		      <Nav>
		        <Nav.Link className="m-2 heading-color" href="#home">Home</Nav.Link>
		        <Nav.Link className="m-2 heading-color" href="#services">Services</Nav.Link>
		        <Nav.Link className="m-2 heading-color" href="#about">About</Nav.Link>
		        <Nav.Link className="m-2 heading-color" href="#contact">Contact</Nav.Link>
		        <Button className="btn-color m-2" style={{width:"120px"}} variant="primary">
		           { user ? <Link to="/" className="text-decoration-none" style={{color:"white"}}>Profile</Link>
		             : <Link to="/signin" className="text-decoration-none" style={{color:"white"}}>Sign in</Link>}
		        </Button>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		  { scrolled && <Button onClick={handleScrollTop} className="btn-color bottom-right-scroll">Top</Button>}
		</Navbar>
		)
}