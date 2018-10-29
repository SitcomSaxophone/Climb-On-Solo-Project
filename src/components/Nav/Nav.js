import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './climbing.svg';
import './Nav.css';

class Nav extends Component {

  state = {
    anchorEl: null,
  }

  handleOpen = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null, 
    });
  }

  render() {
    const { anchorEl } = this.state;
    return (

      <div className="nav">
        <img src={"./climbing.svg"} alt="Climbing Man" />
        <Link to="/home">
          <h2 className="nav-title">Climb On</h2>
        </Link>
        <div className="nav-right">
          <IconButton onClick={this.handleOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link className="nav-link" to="/home">
                {/* Show this link if they are logged in or not,
            but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
                {this.props.user.id ? 'Home' : 'Login / Register'}
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              {this.props.user.id && (
                <>
                  <Link className="nav-link" to="/schedule">
                    Calendar
              </Link>
                </>
              )}
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              {this.props.user.id && (
                <>
                  <LogOutButton className="nav-link" />
                </>
              )}
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link className="nav-link" to="/about">
                About
          </Link>
            </MenuItem>
          </Menu>
        </div >
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
