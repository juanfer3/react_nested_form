import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });
 
class PostsList extends Component {
    render() {

        const {post} = this.props.post;
        const {id,name, description} = this.props.post;
        const { classes } = this.props;

        return (
            <List  >
   
                    <ListItem
                    component={Link} to={`/post/edit/${id}`}
                    key={id}
                    role={undefined}
                    dense
                    button
                
                    className={classes.listItem}
                    >
                    <ListItemText primary={name} />
                    <ListItemSecondaryAction
                        onClick={()=>this.props.deletePost(this.props.post)}

                    >
                        <IconButton aria-label="Delete">
                            <DeleteOutlinedIcon  />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
             
                </List>
        );
    }
}

export default withStyles(styles) (PostsList);