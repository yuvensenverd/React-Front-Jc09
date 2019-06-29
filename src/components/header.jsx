import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">To Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem> 
            
                <NavLink >Welcome, {this.props.useracc}</NavLink>
               
              </NavItem>
            <NavItem> 
              <Link to='/components/RegisterPage'>
                <NavLink >Register</NavLink>
                </Link>
              </NavItem>
              <NavItem> 
              <Link to='/components/SongPage'>
                <NavLink >SongList</NavLink>
                </Link>
              </NavItem>
              <NavItem> 
              <Link to='/components/LoginPage'>
                <NavLink >LogIn</NavLink>
                </Link>
              </NavItem>
              <NavItem> 
        
                <NavLink ></NavLink>
              
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
      useracc : state.USER_DATA.USER_ID,
      userpass : state.USER_DATA.USER_PASS
  }
}

export default connect(mapStateToProps)(Header);