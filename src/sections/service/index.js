import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import Card from '../../components/Card'
import GetTouch from './GetTouch';

export default function Services(){
	return(<>
		<div id="services">
			<div className="d-flex flex-column align-items-center">
				<h5 className="pt-5 mb-3 section-heading-text">SERVICES</h5>  
			    <h1 className="pb-4 heading-color">Here's what we offer</h1>
			</div>
			<Container>			
				<Row>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card/>
					</Col>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card/>
					</Col>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card/>
					</Col>
				</Row>
			</Container>
		</div>
		<GetTouch/>
		</>
		)
}