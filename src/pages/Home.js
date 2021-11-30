import React from 'react';
import Header from '../sections/header'
import Services from '../sections/service'
import About from '../sections/about'
import Contact from '../sections/contact'
import Footer from '../sections/footer'

export default function Home({user}){
  return (
    <div className="App">
            <Header user={user}/> 
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
    </div>
    )
}
