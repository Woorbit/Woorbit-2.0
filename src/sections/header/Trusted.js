import React from 'react'
import { Carousel } from 'react-bootstrap';


export default function Trusted(){
	return(<div>
		<h5 className="white text-align-center mb-0 pt-5" >OUR CLIENTS</h5>
		<Carousel className="white">
		  <Carousel.Item className="h-100" interval={1000}>
		    <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img alt="prestige" src="prestige.png"  />
		    </div>
		  </Carousel.Item>
		  <Carousel.Item interval={1000}>
		     <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img alt="birla" src="birla.jpg" />
		    </div>
		  </Carousel.Item>
		  <Carousel.Item interval={1000}>
		     <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img alt="polar" src="polar.png" />
		    </div>
		  </Carousel.Item>
		  <Carousel.Item interval={1000}>
		     <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<h1>Vihaa trading company</h1>
		    </div>
		  </Carousel.Item>
		</Carousel>
		</div>
		)
}