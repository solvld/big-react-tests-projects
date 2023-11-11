import React from "react";
import {comments} from './commentData';
import Card from './Card'

function ForumApp(){
  return comments.map(comment => <Card commentObject={comment}></Card>)
};

export default ForumApp;