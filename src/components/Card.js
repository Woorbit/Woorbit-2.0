import React from 'react';
import { Card } from 'react-bootstrap';


export default function ServicesCard({className,title,children,img}){
	return(
		<Card style={{ width:'18rem'}} className={`card ${className}`}>
		  <Card.Img variant="top" src={img} className="h-50 mt-5 card-img"/>
		  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
		    <Card.Title className="heading-color">{title}</Card.Title>
		    <Card.Text className="text-center sub-heading-color">
		      {children}
		    </Card.Text>
		  </Card.Body>
		</Card>
		)
}