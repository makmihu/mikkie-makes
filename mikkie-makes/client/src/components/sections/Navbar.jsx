import { useContext } from "react"
import { Context } from "../../context"
import { Link } from "react-router-dom"

export default function Navbar(){
  const {token, logout, user} = useContext(Context)

  return (
    <nav className='navbar'>
      {token === "" ?
        <Link className='links' to="/login">
          Login
        </Link>
      :
        <button className="links" onClick={logout}>
          Logout
        </button>
      }

      <Link className='links' to="/about">
        About
      </Link>

      <Link className='links' to="/">
        Home
      </Link>
      
      {user.isAdmin && <Link className="links" to="/inventory">
        Inventory
      </Link>}

      <Link className='links' to="cart" >
        <i className="fa-solid fa-cart-shopping">Cart</i>
      </Link>
    </nav>
  )
}