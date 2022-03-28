import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Navbar extends Component {
render() {
    return (
      
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Hub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entartainment </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports </Link></li>
                </ul>
              
            </div>
           
      {/* <div className="dropdown" style={{marginRight:"4vw"}}>
  <button className="dropbtn">Country</button>
  <div className="dropdown-content">
    <Link className="flag-icon flag-icon-in" style={{margin:'20px'}} to="/in"><span className="flag-name">INDIA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-ae" style={{margin:'20px'}} to="business/ae"><span className="flag-name">UAE</span></Link>
    <hr></hr> */}
    {/* <Link className="flag-icon flag-icon-at" style={{margin:'20px'}} to="/at"><span className="flag-name">AUSTRIA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-au" style={{margin:'20px'}} to="/au"><span className="flag-name">AUSTRALIA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-be" style={{margin:'20px'}} to="/be"><span className="flag-name">BELGIUM</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-bg" style={{margin:'20px'}} to="/bg"><span className="flag-name">BULGARIA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-br" style={{margin:'20px'}} to="/br"><span className="flag-name">BRAZIL</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-ca" style={{margin:'20px'}} to="/ca"><span className="flag-name">CANADA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-za" style={{margin:'20px'}} to="/za"><span className="flag-name">S.AFRICA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-cn" style={{margin:'20px'}} to="/cn"><span className="flag-name">CHINA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-co" style={{margin:'20px'}} to="/co"><span className="flag-name">COLOMBIA</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-cu" style={{margin:'20px'}} to="/cu"><span className="flag-name">PHILIPPINES</span></Link>
    <hr></hr>
    <Link className="flag-icon flag-icon-cz" style={{margin:'20px'}} to="/cz"><span className="flag-name">C.REPUBLIC</span></Link> */}
    {/* </div>
</div>
 */}










          </div>
  
        </nav>
      </div>
    
    );
  }
}

export default Navbar;
