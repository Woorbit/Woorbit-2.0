import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const ContStyle = {height:"200px",
                   backgroundColor:"#f6f9ff",
                   border:"solid 1px #e1ecff"
               }

export default function ServicesCard(){
	return(
		<Container style={ContStyle} className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
		   <h4>Get in touch</h4>
		   <Row>
		        <Col>
		           <p className="text-align-center">Want to know how we can help your brand stand out? Let's discuss!</p>
		        </Col>
		    </Row>
		   <Button size="lg" className="btn-color">Contact us</Button>
		</Container>
		)
}
