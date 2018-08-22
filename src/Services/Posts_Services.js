import axios from 'axios';
import { CardActions } from '@material-ui/core';


const URL = 'http://localhost:3003/';


var config = {
    headers: {
       'Content-Type': 'application/json',
       //'Authorization': 'Bearer ' + token
    }
  };


function GetPost() {
    return axios.get(URL + '/posts', config)
            .then(function(response){
                console.log(response.data);
                return response.data;
            })
}

function NewPost(posts) {
    /*
    console.log(posts);
    
    return posts*/
    
    return axios.post(URL + '/posts', posts, config)
        .then(function(response){
            //console.log(response);
            return response.data;
        })
}

function DeletePost(id){
  
    
    return axios.delete(URL + '/posts' + '/' + id)
        .then(function(response){
            //console.log(response);
            return response
            
        })
}


function ShowPost(id){
    return axios.get(URL + '/posts' + '/' + id)
        .then(function(response){
            //console.log(response);
            return response.data
        })
}

function EditPost(id, post){
    return axios.put(URL + '/posts' + '/' + id, post, config)
        .then(function(response){
            console.log(response);
            return response.data
        })
}


export {
    GetPost,
    NewPost,
    DeletePost,
    ShowPost,
    EditPost
}