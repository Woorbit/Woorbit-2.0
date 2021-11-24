import React from 'react';
import { Card } from 'react-bootstrap';


export default function ServicesCard({className}){
	return(
		<Card style={{ width:'18rem'}} className={`card ${className}`}>
		  <Card.Img variant="top" src="banner.svg" className="h-50 mt-5 card-img"/>
		  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
		    <Card.Title className="heading-color">Card Title</Card.Title>
		    <Card.Text className="text-center sub-heading-color">
		      Some quick example text to build on the card title and make up the bulk of
		      the card's content.
		    </Card.Text>
		  </Card.Body>
		</Card>
		)
}