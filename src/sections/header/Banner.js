import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';


export default function Banner() {
	return(
		<Container className="banner d-flex flex-column justify-content-center">
		  <Row >
	    	<h1 className="heading-color" style={{fontSize:"70px"}}>
	    	    Creating content that captures attention
	    	</h1>
		  </Row> 	
		  <Row>
		       <p className="sub-heading-color" style={{fontSize:"20px"}}>
		    	    We help brands grow by unleashing the potential of social media 🚀
		    	</p>
		  </Row>
		  <Row className="w-md-50">
		     	<Col>
		     		<Button className="btn-color">Learn How</Button>
		    	    <Button className="mx-2 btn-color">Watch Now</Button>
		     	</Col>
		  </Row>
        </Container>
		)
}