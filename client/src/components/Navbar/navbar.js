import { useState, useEffect, useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState(null);
  const [openLogOutButton, setOpenLogOutButton] = useState(false)

  useEffect(() => {
    if (user !== null && user) {
      setUsername(user.user.username);
    }
  }, [user, username]);

  return (
    <div className='navbar'>
      <div className='navbarContainer'>
        <Link to='/' className='logo'>HotelBook.com</Link>
        <div className='navItems'>
          {!username && <>
            <button className='navButton'>Register</button>
            <Link to='/login' className='navButton'>Login</Link>
          </>
          }
          {username && <button onClick={() => setOpenLogOutButton(!openLogOutButton)} className='navButton'>Hello <b>{username}</b></button>}
          {openLogOutButton && <div className='logoutContainer'><div className='logoutWrapper'>
            <div className='logoutText'>Do you want to log out?</div>
            <div className='logoutButtons'>
              <button onClick={() => setOpenLogOutButton(false)} className='logoutButton'>Log Out</button>
              <button onClick={() => setOpenLogOutButton(false)} className='logoutButton'>No</button>
            </div>
          </div></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
