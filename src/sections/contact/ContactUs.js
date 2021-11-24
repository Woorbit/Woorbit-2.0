import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {CgCamera} from 'react-icons/cg';
import Box from './Box';


export default function ContactUs(){
	return(
		<Container >
			<Row>
				<h6 className="text-align-center section-heading-text mt-5 mb-4">CONTACT</h6>
			</Row>
			<Row >
				<h1 className="text-align-center text-blue-dark mb-4">Contact us</h1>
			</Row>
			<Row>
				<Col>
				   <Box icon={<CgCamera/>} title="Address">
				    <p>304, DH1,</p>
				    <p>BITS Pilani Goa Campus,</p>
				    <p>NH 17B 403726</p>
				   </Box>
				</Col>
				<Col>
				   <Box icon={<CgCamera/>} title="Address">
				    <p>304, DH1,</p>
				    <p>BITS Pilani Goa Campus,</p>
				    <p>NH 17B 403726</p>
				   </Box>
				</Col>
			</Row>
		</Container>
		)
}