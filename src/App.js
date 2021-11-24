import React from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './sections/header'
import Services from './sections/service'
import About from './sections/about'
import Contact from './sections/contact'
import Footer from './sections/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Home({user}){
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


function App() {

  const auth = getAuth();
  const [user,setUser] = React.useState(null);

  React.useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) setUser(user);
    })
  },[auth])


  return (
    <Router>
      <Routes>     
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/signin" element={user ? <Navigate to='/' /> : <Signin/> }/>
        <Route path="signup" element={user ? <Navigate to='/' /> : <Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
