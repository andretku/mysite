import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <header className="body-container body-container_header">
      
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='eng'>English</NavLink>
    
    
    </header>  
  )
}

export default Header