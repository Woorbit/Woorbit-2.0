import React from 'react';
import {  Button } from 'react-bootstrap';

export default function index(){
	return(
		<div className="w-75 bg-blue-light who-we-cont p-5 mb-4 mt-5">
			<h6 className="section-heading-text text-align-none">ABOUT US</h6>
			<h4 className="text-blue-dark">Woorbit</h4>
			<p>
			   Woorbit is a service based company which provide high skilled, punctual
			   labour to the industries keeping the vision of indsutries. We help industries to grow
			   by providing best workers with skills as per requirement of company. We make sure
			    that the workers gets a justifiable income and save them from monopoly of contractors.
			</p>
            <Button className="btn-color">Learn More</Button>
		</div>
		)
}