import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import Card from '../../components/Card'
import GetTouch from './GetTouch';

export default function Services(){
	return(<>
		<div id="services">
			<div className="d-flex flex-column align-items-center">
				<h5 className="pt-5 mb-3">OUR SERVICES</h5>  
			</div>
			<Container>			
				<Row>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card img="service1.svg">
							Fully Criminal verified background of workers and make sure the safety and
							further conflicts within.
						</Card>
					</Col>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card img="service2.svg">
							Hightly skilled labours from locals who have experiance in respected field
							from years.
						</Card>
					</Col>
					<Col className="p-0 d-flex justify-content-center mb-3">
						<Card img="service3.svg">
							Good pay, Good work by removing contractors monopoly, we ensure that workers
							are happy with there wages so the output of labours increase.
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
		<GetTouch/>
		</>
		)
}