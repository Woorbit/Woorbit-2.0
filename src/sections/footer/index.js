import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FiLinkedin, FiTwitter, FiInstagram} from 'react-icons/fi';

export default function Footer(){
	return(
		<Container className="mt-4 border-light-blue" fluid={true}>
			<Row className="p-5 footer-img" style={{background:"white url('footer.png')",backgroundPosition: "170%",backgroundRepeat: "no-repeat",marginBottom:"1px"}}>
				<Col xs={6} sm={5} className="small-icon mb-4">
					<div><h1 className="text-blue-dark">Woorbit</h1></div>
					<FiInstagram  />
					<FiLinkedin />
					<FiTwitter />
				</Col>
				<Col style={{color:"gray"}}>
					<h4>Contact</h4>
					<p>304, DH1,<br/>BITS Pilani Goa Campus,<br/>NH 17B 403726</p>
					<a href="mail:contact@woorbit.com" >contact@woorbit.com</a>
				</Col>
			</Row>
			<Row>
			    <Col className="justify-content-center border-light-blue-top text-blue-dark d-flex  bg-blue-light align-items-center p-4">
			        <p className="text-align-center" >© Copyright <b>MarkitUp</b>. All Rights Reserved </p>
			    </Col>
			</Row>
		</Container>
		)
}