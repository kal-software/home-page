//import { Link} from "react-router-dom"

function Navbar(){
return(
    <>
    <div className="container">
<div>
    <img src="./japanlogo.webp" className="image"/>
</div>
<div className="nav-2-container">
    <div className="jobs">
  Jobs     
    </div>
    <div className="companies">
     Companies
    </div>
    <div className="blog">
    Blog
    </div>
    <div className="login">
        Log In
        
    </div>
    <div className="register">
        <button className="button-register">Register</button>
    </div>
    <div className="employee">
 Employers
       </div>
</div>
    </div>
    </>
)
}
export default Navbar