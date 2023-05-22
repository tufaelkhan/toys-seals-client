import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCircle, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =() =>{
    logOut()
    .then(() =>{})
    .then(error =>{
      console.log(error);
    })
  }

  const navItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/blog'>Blog</Link></li>
  <li><Link to='/toys'>All Toys</Link></li>
{user?.email?  <>
  <li><Link to='/mytoys'>My Toys</Link></li>
  <li><Link to='/addtoys'>Add Toys</Link></li>
  <li><button className=""> Profile<FaUserCircle className=""></FaUserCircle> </button></li>
  <li><button onClick={handleLogOut} className="btn btn-success">SignOut</button></li>

</> :
  <li><Link to='/login'>Login</Link></li>
  }
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <div>
      <img src="https://images-platform.99static.com/OHcO3S0wICgFNpqJ6c5-DdLpIyY=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/87/87373/attachment_87373152" className="ml-12" width='80' alt="" />
    <Link to='/' className="btn btn-ghost normal-case text-xl">Happy Education</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-success">Let`s Start</button>
  </div>
</div>
    );
};

export default Header;