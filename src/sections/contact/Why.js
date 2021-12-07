import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AiOutlineFieldTime} from 'react-icons/ai';
import {FaHandshake} from 'react-icons/fa';
import Model from './Model';



export default function Why(){
	return(
		<Container>
			<Row>
				<Col xs={12} >
					<h2 className="text-align-center mt-5 mb-5">
					   What we offer
					</h2>
				</Col>
				<Col >
					<Container>
						<Row>
							<Col>
							   <Model icon={<FaHandshake/>} heading="Trust First Approch">
							    Woorbit believes trust is first thing which we earn from our client
							    everything comes later.
							   </Model>
							</Col>
							<Col>
							   <Model icon={<AiOutlineFieldTime/>} heading="Tech Support">
							    We provide 24/7 tech support to the industries, out 24/7 services
							    is execptionally perfect and help industries to enhance there outcome
							    greatly.
							   </Model>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
		)
}