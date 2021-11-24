import React from 'react';
import {  Button } from 'react-bootstrap';

export default function index(){
	return(
		<div className="w-75 bg-blue-light who-we-cont p-5 mb-4 mt-5">
			<h6 className="section-heading-text text-align-none">WHO WE ARE</h6>
			<h4 className="text-blue-dark">We are a team of experienced creators who love creating content</h4>
			<p className="">
			   We specialize in various forms of content creation, anything from video production to
			   graphic design to creating creative memes that engage with the right audience. 
			</p>
            <Button className="btn-color">Learn More</Button>
		</div>
		)
}