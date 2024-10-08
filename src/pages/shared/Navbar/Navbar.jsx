
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";



const Navbar = () => {
  const {user, logOut} = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

    const navbarMenus = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      {
        user && isAdmin && <li><Link to="/dashboard/adminHome">Admin home page</Link></li>
      }    
      {
        user && !isAdmin && <li><Link to="/dashboard/userHome">User home page</Link></li>
      }    
      <li><Link to="/dashboard/cart">
      <button className="btn btn-xs">
      <FaCartPlus />
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
      </Link></li>    
      {
      user ?  <> 
      {/* <span>{user?.displayName}</span> */}
      <button onClick={handleLogOut} >Log Out</button></> : <><li><Link className="btn btn-outline"  to="/login">Login </Link></li> </>
    } 
    </>


    return (
        <>
        <div className="navbar bg-opacity-30 text-white fixed z-10 max-w-screen-xl	 bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            navbarMenus
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navbarMenus
      }
    </ul>
  </div>
  <div className="navbar-end">
    
      <Link  to="/login">get started </Link>
    
  </div>
</div>            
        </>
    );
};

export default Navbar;