import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import css from './Header.scss';



// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.


export class Header extends Component {

  componentDidMount() {
    const {actions} = this.props;
    console.log("DID MOUNT");
    // actions.clickLogin(); //This should log us in, but is buggy right now since FB is not always loaded fast enough
  }
  render() {
    window.HeaderProps = this.props;
    return (
      <header className={css.header} >
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home" activeStyle={{color: '#33e0ff'}}>
              <div />
              <span>Home</span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse eventKey={0}>
          <Nav navbar>
            <LinkContainer to="/chats">
              <NavItem eventKey={1}>Chats</NavItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <NavItem eventKey={2}>My Profile</NavItem>
            </LinkContainer>
            <LinkContainer to="/score">
              <NavItem eventKey={3}>My Score</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <NavItem eventKey={3} onClick={this.props.actions.clickLogin}>
              FACEBOOK
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
    );
  }
}
