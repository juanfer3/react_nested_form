import React, { Component } from 'react';
import './Posts.css';



// Services
import {
    GetPost,
    NewPost,
    DeletePost
}from '../../Services/Posts_Services';


// Material ui components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



// Components
import PostList from './PostsList';
import PostsCreacte from './PostCreate'


class Posts extends Component {

    // Constructor
    constructor(props) {
        super(props)

        this.state = {posts: [] }
        this.listPosts = this.listPosts.bind(this)
        this.createNewPost = this.createNewPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount() {
        GetPost()
            .then(data => 
                this.setState({
                    posts:data
                })
            )
    }

    // List  posts Function
    listPosts() {
        
         /* this.state.posts.map(post=>{
            console.log(post);
            
        });*/
        return(
            this.state.posts.map( post => 
                
                <PostList 
                
                key={post.id} 
                post={post} 
                deletePost={this.deletePost} 
                
                />
                
            )
        )
    }

    // Create post function
    createNewPost(myNewPost) {

        const myPost = {
            name: myNewPost.name,
            description: myNewPost.description
            }
            //console.log(createPost);
            NewPost(myPost)
            .then(data =>{
                this.state.posts.push(data)
                this.setState({posts: this.state.posts})
                
            })
    }

    deletePost(myPost){
        DeletePost(myPost.id)
            .then(data=>{
                const index = this.state.posts.indexOf(myPost.id)
                this.state.posts.splice(index, 1)
                this.setState({posts: this.state.posts})
            })
    }


    render() {
        const { classes } = this.props;

        return (
            <div className="App">
                <h1>Posts list</h1>
                <PostsCreacte  createNewPost={this.createNewPost} ></PostsCreacte>
                {this.listPosts()}
                
            </div>
        );
    }
}

export default Posts;