import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

  
class Navbar extends Component {
    render() {
     
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton  color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    
                    <Button 
                    color="inherit"
                    component={Link} to='/'
                    >
                       
                        Home
                     
                    
                    </Button>

                    <Button 
                    color="inherit"
                    component={Link} to='/posts'
                    >
                    
                        Posts
             
                    
                    </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;