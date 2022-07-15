import { Link} from "react-router-dom";
export  function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#e1c2e4"}}
        >
     
       
          <ul className="navbar-nav">
      
          <li className="nav-item">
            <Link  className="nav-link"  to={`/`}><b>Home </b></Link>
            </li>
       

          </ul>
  
      </nav>
    )
}