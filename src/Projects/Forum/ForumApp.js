import React from "react";
import {comments} from './commentData';
import Card from './Card'
import "./Forum.css"

function ForumApp(){
  return comments.map(comment => <Card commentObject={comment}></Card>)
};

export default ForumApp;