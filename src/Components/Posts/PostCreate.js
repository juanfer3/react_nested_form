import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TextField from '@material-ui/core/TextField';

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

class PostCreate extends Component {

    constructor () {
        super();
        this.state = {
          name: '',
          description: '',
          articles: [{
            _id: ''
          }]
        };
        
       
        
        this.handleChange = this.handleChange.bind(this);
        this.addArticles = this.addArticles.bind(this)
      }

      addArticles =()=>{
        const {articles} = this.state
        articles.push({_id: ''})
        this.setState({articles})
      }


      handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    render() {

        const { classes } = this.props;
 
        return (    
            <div>
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

               <br/>
               {this.state.articles.map((article, i) =>(
                <div key={i}>
                 <TextField
                  
                  label="Create article"
                  className={classes.textField}
                  margin="normal"
                  name={`article[${i}][value]`}

                  />
                  <br/>
                </div>
                ))
       
                }
                <Button variant="raised" onClick={this.addArticles}>Add row</Button>


                <br/>
                <Button 
                variant="fab" 
                mini color="primary" 
                aria-label="Add" 
                className={classes.button}
                onClick={()=>this.props.createNewPost(this.state)}
                >
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

export default withStyles(styles) (PostCreate);