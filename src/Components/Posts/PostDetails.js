import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Switch, Redirect, Route } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import TextField from '@material-ui/core/TextField';


// Services
import {
    ShowPost,
    EditPost
}from '../../Services/Posts_Services';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

class PostDetails extends Component {

    // Constructor
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            id:'',
            submitted:false    
         }
        this.handleChange = this.handleChange.bind(this);
        this.editPost = this.editPost.bind(this)
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    componentDidMount() {
        const myid = this.props.match.params.id
        console.log(myid);
        ShowPost(myid)
            .then(data =>
                this.setState({
                    name:data.name,
                    id:data.id
                })
            )
        
      }

      editPost(){
        const myPost = {
            name: this.state.name
        }

        EditPost(this.state.id, myPost )
            .then(data=>{
                console.log(data);
                this.setState({
                    submitted:true
                })
            })
        

      }

    render() {
        if (this.state.submitted === true) {
            return <Redirect to={'/posts'} />
        }
        const { classes } = this.props;
        return (
            <div className="App">
            <div>
                <h1>Edit post</h1>
                <h6>{this.state.name}</h6>
             

                 <TextField
                required
                id="required"
                label="Create Post"
                className={classes.textField}
                margin="normal"
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                />

                <Button 
                variant="fab" 
                mini color="primary" 
                aria-label="Add" 
                className={classes.button}
                onClick={this.editPost}
                >
                    <EditIcon />
                </Button>
            </div>
            </div>
        );
    }
}

export default withStyles(styles) (PostDetails);