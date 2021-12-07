import React from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, signOut} from 'firebase/auth';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Menu from '../../components/Menu';

export default function TopNav({user}){

   const [scrolled,setScrolled] = React.useState(false);
   const navigate = useNavigate();
   const auth = getAuth();

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

    async function handleAuth(){
    	if(user){
    		await signOut(auth);
    		return;
    	}
    	navigate('/signin');
    }


    const NavStyle = scrolled ? {backgroundColor:"white",
                                 boxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 WebkitBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 MozBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",
                                 transition:"550ms"} 
                                 : {backgroundColor:"transparent"}


	return(
		<Navbar style={NavStyle} className="nav-bg pt-0 pb-0" expand="lg" fixed="top">
		  <Container className="d-flex">
		    <Navbar.Brand href="#home" className="d-flex">
		        <img
		          alt="logo"
		          src="/logo.png"
		          width="60"
		          height="50"
		          className="d-inline-block align-top m-1"
		        />
		        <div className="d-flex flex-column justify-content-center">
		           <h5 className="m-0">Woorbit</h5>
		           <p className="p-0 m-0" style={{fontSize:"12px"}}>The work orbit</p>
		        </div>
            </Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
		      <Nav>
		        <Nav.Link className="m-2 h6" href="#home">Home</Nav.Link>
		        <Nav.Link className="m-2 h6" href="#about">About</Nav.Link>
		        <Nav.Link className="m-2 h6" href="#services">Services</Nav.Link>
		        <Nav.Link className="m-2 h6" href="#contact">Contact</Nav.Link>
		        <Nav.Link onClick={ !user && handleAuth} className="m-2 h6">
		           <Menu innerText={user ? user.displayName : 'Signin'} onSignout={handleAuth} user={user}/>
		        </Nav.Link>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		  { scrolled && <Button onClick={handleScrollTop} className="btn-color bottom-right-scroll">Top</Button>}
		</Navbar>
		)
}