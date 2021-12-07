import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {AiFillCaretDown} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

export default function Menu({onSignout,user,innerText}){

  const navigate = useNavigate();

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="mt-5n"
    href="/signin"
    ref={ref}
    onClick={(e) => {e.preventDefault();onClick(e);}}>
    {children}{ user && <AiFillCaretDown/>}
  </a>
));

return(
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      {innerText}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={()=>navigate('/profile')} eventKey="1">Profile</Dropdown.Item>
      {user && <Dropdown.Item onClick={onSignout} eventKey="1">Sign out</Dropdown.Item>}
    </Dropdown.Menu>
  </Dropdown>
   )
}