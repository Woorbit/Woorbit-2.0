import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {CgCamera} from 'react-icons/cg';
import Model from './Model';



export default function Why(){
	return(
		<Container>
			<Row>
				<Col xs={12} >
					<h2 className="text-blue-dark text-align-center mt-5 mb-5">
					   Here's why you should work with us
					</h2>
				</Col>
				<Col >
					<Container>
						<Row>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
						</Row>
						<Row>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
						</Row>
						<Row>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
							<Col>
							   <Model icon={<CgCamera/>} heading="Video Production">
							   We'll record high quality videos that blends well with your brand persona
							   </Model>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
		)
}