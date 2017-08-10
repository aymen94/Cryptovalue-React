import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/bootstrap.min.css';
class Header extends Component{

  render(){
      return(
      <nav className="navbar navbar-default   mobile-bar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" ><strong>{this.props.title}</strong></a>
          </div>
          <ul className="nav navbar-nav">
         <li className="active"><Link to='/Cryptovalue-React/'><a>Home</a></Link></li>
          </ul>
            <div className="navbar-right">
            <ul className="nav navbar-nav">
             <li className="active"><Link to='/Cryptovalue-React/about'><a>About</a></Link></li>
             </ul>
            </div>
        </div>
        
      </nav>
      );
    }
}

export default Header;
