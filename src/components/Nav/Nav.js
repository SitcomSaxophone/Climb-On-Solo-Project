import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import './Nav.css';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#13a052',
  },
  title: {
    fontSize: '10vmin',
    color: '#f2f2f2',
    margin: 'auto',
    marginLeft: '0',
    paddingLeft: '1vmin',
  },
  menu: {
    height: '12vmin',
    width: '12vmin',
    align: 'right',
    marginRight: '0',
  },
  icon: {
    height: '9vmin',
    width: '9vmin',
    paddingBottom: '1vmin'
  },
  button: {
    
  }
}

class Nav extends Component {

  state = {
    anchorEl: null, 
  }

  // open menu element
  handleOpen = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  // close menu element
  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { anchorEl } = this.state;
    return (

      <div className={this.props.classes.root}>
        <h2 className={this.props.classes.title}>Climb On</h2>
        
          <IconButton className={this.props.classes.menu} onClick={this.handleOpen}>
            <MenuIcon className={this.props.classes.icon}/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)} // set open prop to boolean value of anchorEl
            onClose={this.handleClose} // close menu when option chosen or menu clicked on again
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
                  <Link className="nav-link" to="/archive">
                    Archive
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
          </Menu>
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

export default withStyles(styles)(connect(mapStateToProps)(Nav));
