import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';


export default function Banner() {
	return(
		<Container className="banner d-flex flex-column justify-content-center">
		  <Row>
	    	<h1 style={{fontSize:"70px"}}>
	    	    Woorbit
	    	</h1>
		  </Row> 		
		  <Row>
		       <p className="h3">
		    	    Where we provide industries the best work force and man power for the max
		    	    outcome of industries.
		    	</p>
		  </Row>
		  <Row className="w-md-50">
		     	<Col>
		     		<Button className="btn-color p-0">
		     		    <a className="m-3" style={{color:"white"}} href="#services">Learn How</a>
		     		</Button>
		     	</Col>
		  </Row>
        </Container>
		)
}