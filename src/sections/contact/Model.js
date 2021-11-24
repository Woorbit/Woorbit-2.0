import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';



export default function Model({icon,heading,children}){
	return(
		<Container className="mb-4">
			<Row>
				<Col xs={12} className="model-icon-blue">
				  {icon}	
				</Col>
				<Col>
				  <h4 className="text-blue-dark model-heading">{heading}</h4>
				  <p className="model-info-text">{children}</p>
				</Col>
			</Row>
		</Container>
		)
}