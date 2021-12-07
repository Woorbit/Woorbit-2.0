import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FiLinkedin, FiTwitter, FiInstagram} from 'react-icons/fi';

export default function Footer(){
	return(
		<Container className="mt-4 bg-blue-light" fluid={true} id="contact">
			<Row className="p-5 footer-img">
				<Col xs={12} sm={4} className="small-icon mb-4">
					<h4>Links</h4>
					<a href="https://www.linkedin.com/company/woorbit"><FiInstagram/></a>
					<a href="https://www.linkedin.com/company/woorbit"><FiLinkedin /></a>
					<a href="https://www.linkedin.com/company/woorbit"><FiTwitter /></a>
				</Col>
				<Col xs={12} sm={4}  className="mb-4">
					<h4>Mail</h4>
					<a href="mailto:contact@woorbit.com" >contact@woorbit.com</a>
					<br/>
					<a href="mailto:thewoorbit@gmail.com" >thewoorbit@gmail.com</a>
				</Col>
				<Col>
					<h4>Contact</h4>
					<p>Delhi-Gurgaon road,<br/>NH-48, Pincode 110030,<br/>South west Delhi, Delhi(DL)</p>
					<a href="tel:+919058540453">+919058540453, </a><a href="tel:+919411594887">+919411594887</a>
				</Col>
			</Row>
			<Row>
			    <Col className="justify-content-center heading-color text-blue-dark d-flex align-items-center p-4">
			        <p className="text-align-center" >© Copyright <b>Woorbit</b>. All Rights Reserved </p>
			    </Col>
			</Row>
		</Container>
		)
}