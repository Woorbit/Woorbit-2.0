import React from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import UserInfoForm from './pages/UserInfoForm';
import Home from './pages/Home';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

  const auth = getAuth();
  const [user,setUser] = React.useState(null);

  React.useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
  },[auth])


  return (
    <Router>
      <Routes>     
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/signin" element={ <Signin/> }/>
        <Route path="/signup" element={user ? <Navigate to='/signin' /> :<Signup/>}/>
        <Route path="/form" element={<UserInfoForm/>}/>
        <Route path='/profile' element={<Profile user={user} />}/>
      </Routes>
    </Router>
  );
}

export default App;
