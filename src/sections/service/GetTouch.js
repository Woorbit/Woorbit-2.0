import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';


export default function ServicesCard(){
	return(
		<Container fluid={true} style={{height:"200px"}} className="mt-5 bg-blue-light mb-5 d-flex flex-column justify-content-center align-items-center">
		   <h4>Get in touch</h4>
		   <Row>
		        <Col>
		           <p className="text-align-center">Want to know how we can help your brand stand out? Let's discuss!</p>
		        </Col>
		    </Row>
		   <Button size="lg" className="btn-color p-0">
		        <a href="#contact" className="m-3" style={{color:"white"}}>Contact us</a>
		     </Button>
		</Container>
		)
}
